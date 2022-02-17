
@users.each do |user| 
    json.set! user.id do 
        json.extract! user, :id, :name, :email, :created_at
        json.followIds user.follows.pluck(:follow_id)
    end
end
