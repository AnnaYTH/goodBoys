class CreateRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :relationships do |t|
      t.string :relationship_name, null:false 
      t.string :pronounciation, null:false
      t.string :relationship_definition, null:false
      t.string :photo_url, null:false

      t.timestamps
    end

    add_index :relationships, :relationship_name
  end
end
