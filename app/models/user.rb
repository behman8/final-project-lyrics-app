class User < ApplicationRecord
    has_secure_password
    has_many :songs
    has_many :favorites
    has_many :songs, through: :favorites
    validates :username, presence: true, length: { minimum: 5 }
end
