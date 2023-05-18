class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :truck_id, :user_id, :fav

  def fav 
    object.truck.name
  end

  
  
end
