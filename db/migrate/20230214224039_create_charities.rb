class CreateCharities < ActiveRecord::Migration[7.0]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :link
      t.string :city
      t.integer :rating
      t.string :sector

      t.timestamps
    end
  end
end
