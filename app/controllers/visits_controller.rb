class VisitsController < ApplicationController
    before_action :find_visit, :authorize_owner, only: [:update, :destroy]

    #GET /noshboard
    def index 
        visits = Visit.where(exclusive: false)
        render json: visits, status: :ok
    end

    #POST /visits
    def create 
        visit = current_user.visits.create!(visit_params)
        visit.photo.attach(params[:photo_signed_id])
        render json: visit, status: :created
    end

    #PATCH /visits/:id 
    def update 
        @visit.update!(visit_params)
        render json: @visit, status: :ok
    end

    #DELETE /visits/:id 
    def destroy
        @visit.destroy! 
        head :no_content
    end

    private

    def find_visit
        @visit = Visit.find(params[:id])
    end

    def visit_params 
        params.permit(:rating, :caption, :exclusive, :truck_id, :photo)
    end

    #auth for patch/delete visit
    def authorize_owner
       render json: { error: "Not Authorized" }, status: :unauthorized unless @visit.user_id == current_user.id
    end
end
