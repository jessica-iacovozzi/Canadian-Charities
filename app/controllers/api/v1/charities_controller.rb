module Api
  module V1
    class CharitiesController < ApplicationController
      def index
        @charities = Charity.filter(params.slice(:name, :sector, :city, :slogan, :website, :rating,
                                                 :grade, :demonstrated_impact, :cents_to_cause_ratio))
        grade_order = { '+' => 0, nil => 1, '-' => 2 }
        sort = params['sort']

        if sort == '-rating'
          @charities = @charities.sort_by { |c| -c['rating'.to_sym] }.reverse.excluding(@charities.where(rating: 'NR'))
        elsif sort == 'grade'
          @charities = @charities.sort_by { |c| [c['grade'.to_sym][0], grade_order[c['grade'.to_sym][1]]] }
        elsif sort == '-grade'
          @charities = @charities.sort_by { |c| [c['grade'.to_sym][0], grade_order[c['grade'.to_sym][1]]] }.reverse.excluding(@charities.where(grade: 'NR'))
        elsif sort == 'cents_to_cause_ratio'
          @charities = @charities.sort_by { |c| c['cents_to_cause_ratio'.to_sym].scan(/[\d-]+/).map(&:to_i) }
        elsif sort == '-cents_to_cause_ratio'
          @charities = @charities.sort_by { |c| c['cents_to_cause_ratio'.to_sym].scan(/[\d-]+/).map(&:to_i) }.reverse
        elsif sort == 'demonstrated_impact'
          @charities = @charities.in_order_of(:demonstrated_impact, %w[High Good Average Fair Low])
        elsif sort == '-demonstrated_impact'
          @charities = @charities.in_order_of(:demonstrated_impact, %w[High Good Average Fair Low]).reverse
        elsif sort&.include?('-')
          attr = sort.sub('-', '')
          @charities = @charities.sort_by { |c| -c[attr.to_sym] }.reverse
        elsif sort
          @charities = @charities.sort_by { |c| c[params['sort'].to_sym] }
        end

        page_num = params['page'] ? params['page'].to_i : 1
        @charities = @charities.paginate(page: page_num, per_page: 20)

        render json: { meta: meta_data(@charities), data: CharitySerializer.new(@charities) }
      end

      private

      def meta_data(object)
        {
          limit: 20,
          current_page: object.current_page,
          total_pages: object.total_pages,
          total_count: object.total_entries
        }
      end
    end
  end
end
