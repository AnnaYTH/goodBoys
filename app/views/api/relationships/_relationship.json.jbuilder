json.extract! relationship, :id, :relationship_name, :pronounciation, :relationship_definition

json.reviews relationship.reviews.each do |review|
    json.extract! review, :id, :user_id, :name, :relationship_id, :body, :rating, :created_at
end