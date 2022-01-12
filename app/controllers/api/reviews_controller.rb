class Api::ReviewsController < ApplicationController

    # def index 
    #     @reviews = Review.all
    #     render :index
    # end

    # def show 
    #     @review = Review.find_by(id: params[:id])
    #     render :show
    # end

    # def create 
    #     @review = Review.new(review_params)
    #     if @review.save!
    #         render :show
    #         # render :create 
    #     else 
    #         render json: ['Please make sure you have filled out all the fields'], status 206
    #     end
    # end

    # def update 
    #     @review = Review.find_by(id: params[:id])
    #     # gotta fix this so only the author can edit their own reviews
    #     if @review.update(review_params) 
    #         render :create 
    #         # render :show
    #     else 
    #         render json: ['Failed to update'], status 206
    #     end
    # end

    # def destroy 
    #     @review = Review.find(params[:id])
    #     @review.destroy 
    #     render :index 
    # end

    private 

    def review_params
        params.require(:review).permit(:reviewer_id, :relationship_type, :name, :rating, :review)
    end
end