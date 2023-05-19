class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]

    #GET /auth
    def show
        render json: current_user, include: [], status: :ok
    end

    #GET /profile
    def profile 
        render json: current_user, status: :ok
    end

    # POST /signup
    def create 
        # activerecord transaction
        @user = User.create!(user_params)
        attach_avatar
        session[:user_id] = @user.id
        render json: @user, status: :created
    end 

    #PATCH /user/:id
    def update
        current_user.update!(user_update_params)
        render json: current_user, status: :ok
    end

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

     def user_update_params
        params.permit(:tagline)
    end

    def attach_avatar
        if params[:avatar_signed_id].present?
            @user.avatar.attach(params[:avatar_signed_id])
        else
            @user.avatar.attach(
                io: File.open(Utility::FileDownload.new("https://truck-rails-app-assets.s3.us-east-2.amazonaws.com/default_avatar.png").download),
                filename: 'default_avatar.png',
                content_type: 'application/png'
            )
        end
    end

end
