class FavoritesController < ApplicationController

                                                                                                                                                                                                                                         
    #POST /favorites
    def create 
        fav = current_user.favorites.create!(fav_params)
        render json: fav, status: :created
    end

    #DELETE /favorites/:id 
    def destroy 
        fav = current_user.favorites.find(params[:id])
        fav.destroy
        head :no_content
    end

    private

    def fav_params
        params.permit(:truck_id)
    end
   
end
