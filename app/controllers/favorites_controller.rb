class FavoritesController < ApplicationController

    #GET /favorites
    def index 
        favs = Favorite.all 
        render json: favs, status: :ok
    end

    #POST /favorites
    def create 
        fav = Favorite.create(fav_params)
        render json: fav, status: :created
    end

    #DELETE /favorites/:id 
    def destroy 
        fav = Favorite.find(params[:id])
        fav.destroy
        head :no_content
    end

    private

    def fav_params
        params.permit(:truck_id)
    end
    # current_user should provide user id 
end
