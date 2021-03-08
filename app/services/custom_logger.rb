module CustomLogger
  class Log
    @logger ||= Rails.logger

    class << self
      def error_message_400(response)
        @logger.error  "#{response[:method].to_s.upcase} \
                        #{response[:url].to_s}: #{response[:status]} \
                        #{error_body(response[:body])}"
      end

      def error_body(body)
        body if !body.nil? && !body.empty? && body.kind_of?(String)
      end

      def error_message_500(response)
        @logger.error  "#{response[:method].to_s.upcase} \
                        #{response[:url].to_s}: \
                        #{[response[:status].to_s + ".Something in OMDB service is wrong."].compact.join(' ')}"
      end

      def timeout
        @logger.error "OMDB timeout produced"
      end

      def info(response)
        @logger.info  "#{response[:method].to_s.upcase} \
                       #{response[:url].to_s}: #{response[:status]}"
      end
    end
  end
end
