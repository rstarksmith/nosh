class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :truck_id
    has_many :comments

    # has_many :users, through :comments 
end
