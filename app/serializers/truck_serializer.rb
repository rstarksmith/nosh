class TruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :city, :state, :yelp
end
