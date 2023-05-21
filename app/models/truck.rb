class Truck < ApplicationRecord
    validates_presence_of :name, :image, :cuisine, :city, :state, :yelp, :favorites
    validates :name, uniqueness:true, length: { maximum: 30 }

    has_many :visits
    has_many :favorites
    has_many :users, through: :visits
    has_many :users, through: :favorites
    
end
