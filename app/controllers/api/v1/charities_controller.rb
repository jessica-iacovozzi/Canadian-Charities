module Api
  module V1
    class CharitiesController < ApplicationController
      def index
        @charities = Charity.filter(params.slice(:name, :sector, :city, :rating, :slogan))

        if params['sort']&.include?('-')
          attr = params['sort'].sub('-', '')
          @charities = @charities.sort_by { |h| -h[attr.to_sym] }.reverse
        elsif params['sort']
          @charities = @charities.sort_by { |h| h[params['sort'].to_sym] }
        end

        page_num = params['page'] ? params['page'].to_i : 1
        @charities = @charities.paginate(page: page_num, per_page: 20)

        render json: CharitySerializer.new(@charities).serialized_json, meta: meta_data(@charities)
      end

      private

      def meta_data(object)
        {
          # current_page: object.current_page,
          # next_page: object.next_page,
          # prev_page: object.previous_page,
          total_pages: object.total_pages,
          total_count: object.total_entries
        }
      end
    end
  end
end
