@follows.each do |follow| 
    json.set! follow.id do 
        json.extract! follow, :id, :user_id, :follow_id, :created_at
    end
end