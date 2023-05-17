class TruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :cuisine, :city, :state, :yelp

  has_many :visits
end
