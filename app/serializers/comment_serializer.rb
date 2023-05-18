class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reply, :visit_id, :user_id, :commentor
 
  belongs_to :visit
end
