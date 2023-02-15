class PagesController < ApplicationController
  def index
    @charities = Charity.all
  end
end
