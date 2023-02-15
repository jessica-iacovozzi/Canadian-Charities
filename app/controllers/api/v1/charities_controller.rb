module Api
  module V1
    class CharitiesController < ApplicationController
      def index
        @charities = Charity.filter_by(filtering_params)
      end

      private

      def filtering_params
        params.slice(*Charity.filter_scopes)
      end
    end
  end
end
