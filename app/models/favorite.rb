class Favorite < ApplicationRecord
    validates :user_id, uniqueness: { scope: :truck_id,
    message: "Already a favorite truck!" }

    belongs_to :user
    belongs_to :truck
    
end
