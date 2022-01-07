@relationships.each do |relationship|
    json.set! relationship.id do 
        json.extract! relationship :id, :relationship_name, :pronounciation, :relationship_definition
    end
end