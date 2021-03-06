class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_logged_in 

  has_many :reviews, 
    class_name: :Review, 
    primary_key: :id, 
    foreign_key: :user_id

  has_many :follows, 
    class_name: :Follow, 
    primary_key: :id, 
    foreign_key: :user_id 


    ##wow the naming convention is horrid, but I didn't want to call the "people they follow", but I don't care about people who are following my currentUser, only the people my currentUser is following
  has_many :leaders, 
    through: :follows

  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_logged_in
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
  