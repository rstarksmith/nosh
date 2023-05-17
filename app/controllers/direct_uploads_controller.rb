class DirectUploadsController < ApplicationController
    skip_before_action :authorized

    def presigned_url 
        blob = ActiveStorage::Blob.create_before_direct_upload!(blob_params)
        render json: direct_upload_json(blob)
    end

    private

    def blob_params
        {
            metadata: {},
            filename: params[:name],
            byte_size: params[:size],
            checksum: params[:checksum],
            content_type: params[:type]
        }
    end

    def direct_upload_json(blob)
        {
            signed_id: blob.signed_id,
            headers: blob.service_headers_for_direct_upload,
            presigned_url: blob.service_url_for_direct_upload(expires_in: 600)
        }
    end
end
