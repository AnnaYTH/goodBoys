class Relationship < ApplicationRecord 
    validates :relationship_definition, :relationship_name, :pronounciation, presence:true


    has_many :reviews,
        class_name: :Review, 
        primary_key: :id, 
        foreign_key: :relationship_type
end