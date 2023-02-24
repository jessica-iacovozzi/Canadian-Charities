module Api
  module V1
    class CharitiesController < ApplicationController
      rescue_from ActiveRecord::UnknownAttributeReference, with: :show_errors

      def index
        @charities = filter(Charity.all)
        @charities = sort(@charities) if params['sort']
        page_num = params['page'] ? params['page'].to_i : 1
        @charities = @charities.paginate(page: page_num, per_page: 20)

        render json: { meta: meta_data(@charities), data: CharitySerializer.new(@charities) }
      end

      private

      def filter(scope)
        params.slice(:name, :sector, :city, :slogan, :website, :rating, :grade, :demonstrated_impact,
                     :cents_to_cause_ratio).each do |key, value|
          scope = scope.where("#{key} LIKE ?", "%#{value.capitalize}%") if value.present?
        end
        scope
      end

      def sort(scope)
        grade_order = { '+' => 0, nil => 1, '-' => 2 }

        sort_functions = {
          '-name' => -> { scope.order(name: :desc) },
          '-city' => -> { scope.order(city: :desc) },
          '-sector' => -> { scope.order(sector: :desc) },
          '-rating' => -> { scope.order(rating: :desc).where.not(rating: 'NR') },
          '-website' => -> { scope.order(website: :desc) },
          '-slogan' => -> { scope.order(slogan: :desc) },
          'grade' => lambda {
            scope.sort_by { |c| [c['grade'.to_sym][0], grade_order[c['grade'.to_sym][1]]] }
          },
          '-grade' => lambda {
            scope.sort_by { |c| [c['grade'.to_sym][0], grade_order[c['grade'.to_sym][1]]] }
                 .reverse.excluding(@charities.where(grade: 'NR'))
          },
          'cents_to_cause_ratio' => lambda {
            scope.sort_by { |c| c['cents_to_cause_ratio'.to_sym].scan(/[\d-]+/).map(&:to_i) }
          },
          '-cents_to_cause_ratio' => lambda {
            scope.sort_by { |c| c['cents_to_cause_ratio'.to_sym].scan(/[\d-]+/).map(&:to_i) }.reverse
          },
          'demonstrated_impact' => lambda {
            scope.in_order_of(:demonstrated_impact, %w[High Good Average Fair Low])
          },
          '-demonstrated_impact' => lambda {
            scope.in_order_of(:demonstrated_impact, %w[High Good Average Fair Low]).reverse
          }
        }

        sort_function = sort_functions[params[:sort]]
        sort_function = -> { scope.order(params[:sort]) } if sort_function.nil? && params[:sort]

        sort_function.call || scope
      end

      def meta_data(object)
        {
          limit: 20,
          current_page: object.current_page,
          total_pages: object.total_pages,
          total_count: object.total_entries
        }
      end

      def show_errors
        render json: { status: 400 }
      end
    end
  end
end
