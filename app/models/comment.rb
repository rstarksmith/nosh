class Comment < ApplicationRecord
    validates :reply, presence: true
    validates :reply, length: { in: 1..60 }

    belongs_to :visit
    belongs_to :user

    
    def commentor 
       user.username
    end

end
