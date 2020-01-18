class ResponseHandler
  include CustomLogger

  NOT_FOUND = 404
  SERVER_ERROR = 500
  SUCCESS = 200
  REQUEST_ERROR = (400..499).freeze

  def initialize(response)
    @response = response
    @status = response&.status
    @body = JSON.parse(
              response&.body, symbolize_names: true
            ).deep_transform_keys { |key| snake_key(key) }
  end

  def bad_request?
    REQUEST_ERROR.include? @status
  end

  def success?
    @status == SUCCESS && !response_with_empty_data?
  end

  def response_with_empty_data?
    @body.fetch(:response) != "True"
  end

  def handle(klass)
    if success?
      Log.info(@response.env)
      @body[:search].map do |object|
        object[:type].capitalize!
        klass.new(object)
      end
    elsif response_with_empty_data? || bad_request?
      Log.error_message_400(@response.env)
      Fault.new NOT_FOUND
    else
      Log.error_message_500(@response.env)
      Fault.new SERVER_ERROR
    end
  end

  private

  def snake_key(key)
    key.to_s.underscore.to_sym
  end
end