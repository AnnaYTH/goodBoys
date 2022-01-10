
@reviews.each do |review| 
    json.set! review.id do 
        json.extract! review, :id, :relationship_name, :pronounciation, :relationship_definition
    end
end
