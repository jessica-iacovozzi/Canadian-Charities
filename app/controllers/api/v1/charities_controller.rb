module Api
  module V1
    class CharitiesController < ApplicationController
      def index
        @charities = Charity.filter(params.slice(:name, :sector, :city, :rating))

        render json: CharitySerializer.new(@charities).serialized_json
      end
    end
  end
end
