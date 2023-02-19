class AddAttributesToCharities < ActiveRecord::Migration[7.0]
  def change
    add_column :charities, :registration_number, :string
    add_column :charities, :phone_number, :string
    add_column :charities, :website, :string
    add_column :charities, :grade, :string
    add_column :charities, :cents_to_cause_ratio, :string
    add_column :charities, :demonstrated_impact, :string
  end
end
