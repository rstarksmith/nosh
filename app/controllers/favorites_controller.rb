class FavoritesController < ApplicationController

    # #GET /favorites
    # def index 
    #     favs = current_user.favorites.all 
    #     render json: favs, status: :ok
    # end
                                                                                                                                                                                                                                          
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
