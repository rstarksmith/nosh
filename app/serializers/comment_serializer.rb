class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reply, :visit_id, :user_id, :commentor
 
  def commentor 
    object.user.username
  end

  has_one :visit

end
