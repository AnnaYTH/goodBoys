class CreateReview < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :relationship_id, null:false
      t.string :name, null:false
      t.integer :rating, null:false 
      t.string :body, null:false

      t.timestamps
    end

    add_index :reviews, [:user_id, :name]
  end
end
