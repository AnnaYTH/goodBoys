json.extract! user, :id, :email, :name, :created_at

json.followIds user.follows.pluck(:follow_id)