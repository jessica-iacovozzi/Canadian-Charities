class AddSloganToCharities < ActiveRecord::Migration[7.0]
  def change
    add_column :charities, :slogan, :string
  end
end
