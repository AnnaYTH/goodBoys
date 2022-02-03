##json.set! @review[0].user_id do 
##    json.extract! @review[0], :id, :user_id, :name, :relationship_id, :review, :rating, :created_at
##end

##json.review do 
##    json.id @review.id 
##end
##