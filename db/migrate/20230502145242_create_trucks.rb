class CreateTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :trucks do |t|
      t.string :name
      t.string :cuisine
      t.string :city
      t.string :state
      t.string :yelp

      t.timestamps
    end
  end
end
