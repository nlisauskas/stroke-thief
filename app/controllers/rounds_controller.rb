class RoundsController < ApplicationController
  before_action :set_round, only: [:show, :update, :destroy]
  #before_action :authenticate_user

  # GET /rounds
  def index
    if params[:user_id]
      @user = User.find_by_id(params[:user_id])
      @rounds = @user.rounds
    elsif params[:course_id]
      @course = Course.find_by_id(params[:course_id])
      @rounds = @course.rounds
     else
      @rounds = Round.all
    end
     render json: @rounds
  end

  # GET /rounds/1
  def show
    render json: @round
  end

  # POST /rounds
  def create
    @user = User.find_by_id(params[:user_id])
    @round = Round.new(round_params)
    @course = Course.find_by_id(params[:course_id])
    @round.user = @user
    if @round.save
      @user.calculate_handicap
      @user.save
      render json: {round: @round, user: @user, course: @course}, status: :created
    else
      render json: @round.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rounds/1
  def update
    @user = User.find_by_id(params[:user_id])
    if @round.update(round_params)
      @user.calculate_handicap
      @user.save
      render json: {round: @round, user: @user}
    else
      render json: @round.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rounds/1
  def destroy
    @user = User.find_by_id(params[:user_id])
    @round.destroy
    @user.calculate_handicap
    @user.save
    render json: {handicap: @user.handicap, id: @round.id}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_round
      @round = Round.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def round_params
      params.require(:round).permit(:score, :putts, :user_id, :course_id)
    end
end
