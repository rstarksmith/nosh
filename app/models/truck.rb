class Truck < ApplicationRecord
    validates_presence_of :name, :image, :cuisine, :city, :state, :yelp
    validates :name, uniqueness:true, length: { maximum: 30 }

    has_many :visits
    # should I dependent destroy visits? 
    has_many :users, through: :visits
    has_many :users, through: :favorites
end
