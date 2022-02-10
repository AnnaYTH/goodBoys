json.extract! @review, :id, :user_id, :name, :relationship_id, :body, :rating, :created_at
##json.partial! 'api/relationships/relationship', relationship: @relationship