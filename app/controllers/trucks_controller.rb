class TrucksController < ApplicationController

    #GET /trucks
    def index 
        trucks = Truck.all.order(:name) 
        render json: trucks, include: [], status: :ok
    end

    #GET /trucks/:id
    def show 
        truck = Truck.find(params[:id])
        favs = current_user.favorites
        render json: truck, status: :ok
    end

end


