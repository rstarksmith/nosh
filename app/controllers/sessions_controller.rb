class SessionsController < ApplicationController

    skip_before_action :authorized, only: [:create]

    #POST /signin
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username and/or password"] }, status: :unauthorized
        end
    end

    #DELETE /logout
    def destroy 
        session.delete :user_id
        head :no_content
    end

end
