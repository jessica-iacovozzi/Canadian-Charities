class Charity < ApplicationRecord
  include Filterable

  scope :filter_by_rating, ->(rating) { where rating: }
  scope :filter_by_grade, ->(grade) { where grade: }
  scope :filter_by_demonstrated_impact, ->(demonstrated_impact) { where demonstrated_impact: }
  scope :filter_by_cents_to_cause_ratio, ->(cents_to_cause_ratio) { where cents_to_cause_ratio: }
  scope :filter_by_name, ->(name) { where('name like ?', "%#{name}%") }
  scope :filter_by_sector, ->(sector) { where('sector like ?', "%#{sector}%") }
  scope :filter_by_city, ->(city) { where('city like ?', "%#{city}%") }
end
