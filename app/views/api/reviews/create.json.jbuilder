json.set! review.id do 
    json.extract! review, :id, :reviewer_id, :name, :relationship_type, :review, :rating, :created_at
end