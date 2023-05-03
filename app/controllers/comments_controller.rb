class CommentsController < ApplicationController
    # before_action :find_visit, only: [:update, :destroy]

    #POST /comments
    def create 
        comment = 
    end

    private

    def find_visit
        @visit = current_user.visits.find(params[:id])
    end





end
