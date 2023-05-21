class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :tagline, :avatar, :visits, :created_at, :comments

  def avatar 
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

  def comments
    object.comments.length
  end

  def created_at
    object.created_at.strftime("%b '%y")
  end

  has_many :visits
  has_many :favorites 
  has_many :comments
  
end
