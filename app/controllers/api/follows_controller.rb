class Api::FollowsController < ApplicationController

    def show 
        @follow = Follow.find(params[:id])
        render :show
    end

    def create 
        @follow = Follow.new(follow_params)
        if @follow.save
            render :show
        else 
            render json: ['You Already Follow This User'], status: 404
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow 
            @follow.destroy
            render :show
        else 
            render json: ['You are not following this user'], status: 404
        end
    end

    private 

    def follow_params
        params.require(:follow).permit(:user_id, :follow_id)
    end
end