class CommentsController < ApplicationController
    before_action :find_visit, only: [:update, :destroy]

    #POST /visits/:id/comments
    def create 
        comment = 
    end

    private

    def find_visit
        @visit = current_user.visits.find(params[:id])
    end





end
