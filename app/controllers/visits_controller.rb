class VisitsController < ApplicationController
    

    # this will only be visits that are not private and shared to community page 
    # would like them to only display 20 or so at a time
    # skip before action to display visits on home page 
    #GET /noshboard
    def index 
        visits = Visit.all
        render json: visits, status: :ok
    end

    #POST /visits
    def create 
        visit = Visit.create!(visit_params)
        render json: visit, status: :created
    end

    #PATCH /visits/:id 
    def update 
        visit = Visit.find(params[:id])
        visit.update(visit_params)
        render json: visit, status: :ok
    end

    #DELETE /visits/:id 
    def destroy
        visit = Visit.find(params[:id])
        visit.destroy 
        head :no_content
    end

    private

    
    def visit_params 
        params.permit(:rating, :caption, :photo, :truck_id, :photo)
    end
end
