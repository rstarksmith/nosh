class VisitSerializer < ActiveModel::Serializer
  attributes :id, :rating, :caption, :private, :user_id, :truck_id, :comments
  
  has_many :comments
end
