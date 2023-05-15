class VisitSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :rating, :caption, :private, :user_id, :truck_id,  :created_at, :photo, :author, :comments,
  
  def photo
    rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end

  def created_at
    object.created_at.strftime("%b '%y")
    # object.created_at.strftime("%b %d, %y")
  end

  def author
     object.user.username
  end

  has_many :comments


end
