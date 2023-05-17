class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :tagline, :avatar

  def avatar 
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

  has_many :visits
  has_many :favorites 
  
end
