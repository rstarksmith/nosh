class VisitSerializer < ActiveModel::Serializer
  attributes :id, :rating, :caption, :private, :user_id, :truck_id
end
