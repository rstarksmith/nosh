class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.integer :rating
      t.string :caption
      t.boolean :private
      t.integer :user_id
      t.integer :truck_id

      t.timestamps
    end
  end
end
