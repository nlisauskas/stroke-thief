class Round < ApplicationRecord
  belongs_to :user
  belongs_to :course
  validates :score, presence: true
  validates :putts, presence: true

  def self.lowest_round
    scores = []
    Round.all.each do |round|
      scores << round.score.to_i
    end
    scores.min
  end
end
