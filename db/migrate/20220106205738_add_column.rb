class AddColumn < ActiveRecord::Migration[6.1]
  def changg

    create_table :reviews do |t|
      t.integer :reviewer_id, null:false
      t.integer :relationship_type, null:false
      t.string :name, null:false
      t.integer :rating, null:false 
      t.text :review, null:false

      t.timestamps
    end
    
    add_index :reviews, [:reviewer_id, :name]
  end
end
