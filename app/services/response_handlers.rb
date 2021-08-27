class ResponseHandlers
  class << self
    def search_handler
      Proc.new do |body|
        body[:search].map do |object|
          object[:type].capitalize!
          Medium.create(object)
        end
      end
    end

    def detail_handler
      Proc.new do |body|
        MediumDetail.create(body.except(:type, :ratings, :response))
      end
    end
  end
end