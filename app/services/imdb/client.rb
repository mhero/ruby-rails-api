module Imdb  
  class Client
    def initialize
      @connetion = Imdb::Http.new
    end
    
    def search_by
      result = @connetion.fetch("/", s: "love", plot: "full", r: "json")
    end
  end
end

