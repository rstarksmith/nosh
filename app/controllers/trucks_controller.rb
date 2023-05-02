class TrucksController < ApplicationController

    #GET /trucks
    def index 
        trucks = Trucks.all 
        render json: trucks, status: :ok
    end

    # do I want custom routes for cities?
    #GET /trucks/fortworth
    # def fortworth
    #     trucks = 
    # end

    #GET /trucks/:id
    def show 
        truck = Truck.find(params[:id])
        render json: truck, status: :ok
    end

    # def destroy - stretch admin
    #     truck = truck.find(params[:id])
    #     truck.destroy
    #     head :no_content
    # end

end
