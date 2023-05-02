class User < ApplicationRecord
    validates :username, presence: true,  on: [:create, :show]
    validates :username, uniqueness: true, length: { in: 3..15 }, format: { without: /\s/, message: "cannot contain space" }, on: :create
    validates :password, confirmation: true, length: {in: 3..20}, on: [:create, :show]
    validates :password_confirmation, presence: true, on: :create
    validates :tagline, length: { in: 2..30}
    validates_presence_of :avatar, :tagline  

    has_secure_password

    has_one_attached :avatar

    has_many :visits, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :trucks, through: :visits
    has_many :trucks, through: :favorites
end
