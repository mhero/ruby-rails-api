module Imdb
  class Http

    DEFAULT_TIMEOUT = 3 #seconds

    def initialize
      @connection ||= Faraday.new(  
        url: ENV["IMDB_ENDPOINT"],  
        params: Imdb::Auth.authenticate,   
        headers: {'Content-Type' => 'application/json'},
        request: { timeout: DEFAULT_TIMEOUT }
      ) do |conn|
        conn.use Imdb::ServerErrors
        conn.adapter Faraday.default_adapter
      end
    end

    def fetch(endpoint, params = {})
      begin
        response = @connection.get(endpoint) do |request|
          params.each do |key, value|
            request.params[key] = value
          end
        end
      rescue Faraday::TimeoutError
        Log.timeout
      end 
      ResponseHandler.new(response)
    end
  end
end