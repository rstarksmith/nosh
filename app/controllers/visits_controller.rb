class VisitsController < ApplicationController

    #GET /visits
    def index 
        visits = Visit.all 
        render json: visits, status: :ok
    end

    #POST /visits
    def create 
        visit = Visit.create(visit_params)
        render json: visit, status: :created
    end

    #PATCH /visits/:id 
    def update 
        visit = Visit.find(params[:id])
        visit.update(visit_params)
        render json: visit, status: :ok

    private

    def visit_params 
        params.permit(:rating, :caption, :photo, :truck_id)
    end
end
