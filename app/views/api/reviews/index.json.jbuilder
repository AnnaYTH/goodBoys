
 @reviews.each do |review| 
     json.set! review.id do 
         json.extract! review, :id, :user_id, :name, :relationship_id, :body, :rating, :created_at
     end
 end
