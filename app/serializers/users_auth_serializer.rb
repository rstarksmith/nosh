class UsersAuthSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar

  def avatar 
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end
  
end
