module Orderable
  extend ActiveSupport::Concern
  module ClassMethods
    def ordering_params(params)
      ordering = {}

      if params[:sort]
        sort_order = { '+' => :asc, '-' => :desc }

        sorted_params = params[:sort].split(',')
        sorted_params.each do |attr|
          sort_sign = (attr =~ /\A[+-]/) ? attr.slice!(0) : '+'
          model = controller_name.classify.constantize
          ordering[attr] = sort_order[sort_sign] if model.attribute_names.include?(attr)
        end
      end
      ordering
    end
  end
end
