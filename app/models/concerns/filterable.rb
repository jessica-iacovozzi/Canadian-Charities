module Filterable
  extend ActiveSupport::Concern

  included do
    @filter_scopes ||= []
  end

  class_methods do
    attr_reader :filter_scopes

    def filter_scope(title, *args)
      scope title, *args
      filter_scopes << title
    end

    def filter_by(filtering_params)
      results = all
      filtering_params.each do |filter_scope, filter_value|
        filter_value = filter_value.reject(&:blank?) if filter_value.is_a?(Array)
        results = results.public_send(filter_scope, filter_value) unless filter_value.blank?
      end
      results
    end
  end
end
