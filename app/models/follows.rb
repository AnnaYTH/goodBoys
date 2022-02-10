class Follows < ApplicationRecord
    validates :user_id, :follow_id, presence:true
    validates :user_id, uniqueness: { scope: :follow_id }

    belongs_to :follower, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User
end