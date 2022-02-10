class CreateFollowing < ActiveRecord::Migration[6.1]
  def change
    create_table :followings do |t|
      t.integer :user_id, null:false
      t.integer :follow_id, null:false 

      t.timestamps
    end

    add_index :followings, [:user_id, :follow_id], unique:true
  end
end
