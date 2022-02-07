class Review < ApplicationRecord 
    validates :user_id, :relationship_id, :name, :rating, :body, presence:true 
    validates :rating, numericality: { in: 1..5 }

    belongs_to :user, 
        class_name: :User, 
        primary_key: :id, 
        foreign_key: :user_id

    belongs_to :relationship, 
        class_name: :Relationship, 
        primary_key: :id, 
        foreign_key: :relationship_id
end