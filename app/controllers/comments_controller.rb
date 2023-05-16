class CommentsController < ApplicationController
    before_action :find_comment, :authorize_delete, only: :destroy
    
  
    #POST /visits/:visit_id/comments
    def create 
        comment = current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    #DELETE /comments/:id
    def destroy 
        @comment.destroy
        head :no_content
    end

    private

    def find_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params 
        params.permit(:reply, :visit_id)
    end

    #auth for delete comment
    def authorize_delete
       render json: { error: "Not Authorized" }, status: :unauthorized unless @comment.user_id == current_user.id
    #    render json: { error: "Not Authorized" }, status: :unauthorized unless @visit.user_id || comment.user_id == current_user.id
    end


end
