class ResponseHandlers
  class << self
    def search_handler
      Proc.new do |body|
        body[:search].map do |object|
          object[:type].capitalize!
          Medium.new(object)
        end
      end
    end

    def detail_handler
      Proc.new do |body|
        MediumDetail.new(body.except(:type, :ratings, :response))
      end
    end
  end
end