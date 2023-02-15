class Charity < ApplicationRecord
  include Filterable

  filter_scope :charity_name, ->(charity_name) { where(charity_name:) }
  filter_scope :charity_city, ->(charity_city) { where(charity_city:) }
  filter_scope :charity_sector, ->(charity_sector) { where(charity_sector:) }
  filter_scope :charity_rating, ->(charity_rating) { where(charity_rating:) }
end
