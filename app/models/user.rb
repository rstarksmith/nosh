class User < ApplicationRecord
    has_secure_password

    has_one_attached :avatar

    has_many :visits
    has_many :comments
    has_many :trucks, through: :visits
    has_many :trucks, through: :favorites
end
