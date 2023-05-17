class TrucksController < ApplicationController

    #GET /trucks
    def index 
        trucks = Truck.all.order(:name) 
        render json: trucks, status: :ok
    end

    #GET /trucks/:id
    def show 
        truck = Truck.find(params[:id])
        render json: truck, status: :ok
    end

end
