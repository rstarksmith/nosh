class Visit < ApplicationRecord
    validates_presence_of :caption, :rating
    validates :caption, length: { in: 2..60}
    validates :rating, numericality: { only_integer: true }

    has_one_attached :photo
    
    belongs_to :user
    belongs_to :truck
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments 
end
