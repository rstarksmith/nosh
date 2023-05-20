class VisitsController < ApplicationController
    before_action :find_visit, :authorize_owner, only: [:update, :destroy]

    #GET /noshboard
    def index 
        visits_filtered = Visit.where(exclusive: false)
        visits = visits_filtered.order(created_at: :desc)
        render json: visits, status: :ok
    end

    #POST /visits
    def create 
        @visit_user = current_user.visits.create!(visit_params)
        attach_visit
        # visit.photo.attach(params[:photo_signed_id])
        render json: @visit_user, status: :created
    end

    #PATCH /visits/:id 
    def update 
        @visit.update!(visit_params)
        render json: @visit, status: :ok
    end

    #DELETE /visits/:id 
    def destroy
        @visit.destroy! 
        head :no_content
    end

    private

    def find_visit
        @visit = Visit.find(params[:id])
    end

    def visit_params 
        params.permit(:rating, :caption, :exclusive, :truck_id, :photo)
    end

    #auth for patch/delete visit
    def authorize_owner
       render json: { error: "Not Authorized" }, status: :unauthorized unless @visit.user_id == current_user.id
    end

    def attach_visit
        if params[:photo_signed_id].present?
            @visit_user.photo.attach(params[:photo_signed_id])
        else
            @visit_user.photo.attach(
                io: File.open(Utility::FileDownload.new("https://truck-rails-app-assets.s3.us-east-2.amazonaws.com/default_visit.png").download),
                filename: 'default_visit.png',
                content_type: 'application/png'
            )
        end
    end
end
