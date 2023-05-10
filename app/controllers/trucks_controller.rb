class TrucksController < ApplicationController

    #GET /trucks
    def index 
        trucks = Truck.all 
        render json: trucks, status: :ok
    end

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

    # private

    # def truck_params 
    #     params.permit(:name)
    # end

end
