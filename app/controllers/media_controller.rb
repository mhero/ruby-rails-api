class MediaController < ApplicationController
  def index
    result = Imdb::Client.new.search_by_title(
      media_params[:title],
      media_params
    )
    response_serializer(result.handle(Medium))
  end

  private

  def media_params
    params.permit(:title, :year, :page)
  end

  def response_serializer(response)
    if response.is_a? Fault
      render status: response.code
    else
      render json: response
    end
  end
end
