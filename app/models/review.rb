class Review < ApplicationRecord 
    validates :reviewer_id, :relationship_type, :name, :rating, :review, presence:true 
    validates :rating, numericality: { in: 1..5}

    belongs_to :user, 
        class_name: :User, 
        primary_key: :id, 
        foreign_key: :reviewer_id

    belongs_to :relationship, 
        class_name: :Relationship, 
        primary_key: :id, 
        foreign_key: :relationship_type
end