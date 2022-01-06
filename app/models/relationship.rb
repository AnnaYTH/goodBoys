class Relationship < ApplicationRecord 
    validates :relationship_definition, :relationship_name, :pronounciation, presence:true


    # Will have many reviews associated with this "type"
end