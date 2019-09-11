class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  has_many :rounds
  has_many :courses, through: :rounds

  def differentials
    differential_array = []
    self.rounds.each do |round|
      differential = (round.score - round.course.rating) * 113 / round.course.slope
      differential_array << differential
    end
    differential_array
  end

 def calculate_handicap
   if self.rounds.size < 5
     self.handicap = 1000
   elsif self.rounds.size >=5 && self.rounds.size <= 6
     self.handicap = (self.differentials.min) * 0.96
   elsif self.rounds.size > 6 && self.rounds.size <= 8
     sorted = self.differentials.sort
     self.handicap = (sorted[0...2].sum.to_f / 2) * 0.96
   elsif self.rounds.size > 8 && self.rounds.size <= 10
     sorted = self.differentials.sort
     self.handicap = (sorted[0...3].sum.to_f / 3) * 0.96
   elsif self.rounds.size > 10 && self.rounds.size <= 12
     sorted = self.differentials.sort
     self.handicap = (sorted[0...4].sum.to_f / 4) * 0.96
   elsif self.rounds.size > 12 && self.rounds.size <= 14
     sorted = self.differentials.sort
     self.handicap = (sorted[0...5].sum.to_f / 5) * 0.96
   elsif self.rounds.size > 14 && self.rounds.size <= 16
     sorted = self.differentials.sort
     self.handicap = (sorted[0...6].sum.to_f / 6) * 0.96
   elsif self.rounds.size = 17
     sorted = self.differentials.sort
     self.handicap = (sorted[0...7].sum.to_f / 7) * 0.96
   elsif self.rounds.size = 18
     sorted = self.differentials.sort
     self.handicap = (sorted[0...8].sum.to_f / 8) * 0.96
   elsif self.rounds.size = 19
     sorted = self.differentials.sort
     self.handicap = (sorted[0...9].sum.to_f / 9) * 0.96
   elsif self.rounds.size > 19
     self.handicap = (sorted[0...10].sum.to_f / 10) * 0.96
   end
##  handicap differential = (score - course rating) x 113 / slope rating
## need at least 5 rounds
## 5 to 10 rounds: lowest differential x .96
## 11 to 19 rounds: average of lowest 5 differentials x .96
## 20 rounds: average of lowest 10 differentials x .96
  self.save
 end

end
