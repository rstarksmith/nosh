class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]

    
    # def index 
    #     users = User.all
    #     render json: users, status: :ok
    # end

    # #GET /auth
    def show
        render json: current_user, status: :ok
    end

    # POST /signup
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #PATCH /user/:id
    # def update
    #     current_user.update!(user_update_params)
    #     render json: current_user, status: :ok
    # end

    # #DELETE /closeaccount
    # def destroy
    #     current_user.destroy!
    #     session.delete :user_id  
    #     head :no_content
    # end
    
    private

    def user_params 
        params.permit(:username, :password, :password_confirmation, :tagline, :avatar)
    end

end
