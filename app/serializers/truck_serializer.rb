class TruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :cuisine, :city, :state, :yelp

  def visits 
    object.visits.where(exclusive: false)
  end

  has_many :visits
  
end
