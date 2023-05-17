class DirectUploadsController < ApplicationController

    def create 
        byebug
        # blob = ActiveStorage::Blob.create_before_direct_upload!(blob_args)
        # render json: direct_upload_json(blob)
    end

    # private

    # def direct_upload_json(blob)

    # end
end
