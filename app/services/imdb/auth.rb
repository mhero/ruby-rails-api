module Imdb
  class Auth
    class << self 
      def authenticate
        {
          apikey: ENV["IMDB_KEY"]
        }
      end
      
    end
  end
end