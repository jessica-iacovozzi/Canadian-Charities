class Charity < ApplicationRecord
  include Filterable

  scope :filter_by_rating, ->(rating) { where rating: }
  scope :filter_by_name, ->(name) { where('name like ?', "%#{name}%") }
  scope :filter_by_sector, ->(sector) { where('sector like ?', "%#{sector}%") }
  scope :filter_by_city, ->(city) { where('city like ?', "%#{city}%") }
end
