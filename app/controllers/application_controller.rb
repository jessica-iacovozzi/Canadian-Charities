class ApplicationController < ActionController::API
  def fallback_index_html
    render file: 'charity-finder/public/index.html'
  end
end
