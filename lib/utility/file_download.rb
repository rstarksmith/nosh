
require 'open-uri'

module Utility
    class FileDownload
        def initialize(url)
            @url = url
            pathname = Rails.root.join('tmp', 'storage')
            @file_path = "#{pathname}/#{SecureRandom.uuid}"
        end
        

        def download
            IO.copy_stream(open(@url), @file_path)
            @file_path
        end
    end
end