class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :tagline
 
  has_many :favorites 
end
