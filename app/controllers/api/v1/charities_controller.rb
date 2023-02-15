module Api
  module V1
    class CharitiesController < ApplicationController
      def index
        charities = Charity.all
        render json: CharitySerializer.new(charities, options).serialized_json
      end
    end
  end
end
