class CommentsController < ApplicationController
    # before_action :find_visit, only: [:update, :destroy]
    
    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end
    
    #POST /comments
    def create 
        
    end

    private

    def find_visit
        @visit = current_user.visits.find(params[:id])
    end





end
