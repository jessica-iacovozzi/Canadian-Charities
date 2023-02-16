class ChangeRatingFromIntegerToString < ActiveRecord::Migration[7.0]
  def change
    change_column :charities, :rating, :string
  end
end
