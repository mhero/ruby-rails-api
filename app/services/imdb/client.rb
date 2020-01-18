module Imdb  
  class Client
    PLOT = "full"
    FORMAT = "json"

    def initialize
      @connetion = Imdb::Http.new
    end
    
    def search_by_title(title, options = {})
      result = @connetion.fetch(
                  "/", 
                  s: title, y: options[:year], 
                  plot: PLOT, r: FORMAT,
                  page: options.fetch(:page, 1)
               )
    end
  end
end

