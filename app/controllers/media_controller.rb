class MediaController < ApplicationController
  def index
    result = Imdb::Client.new.search_by_title(
      media_params[:title],
      media_params
    )
    response_serializer(
      result.handle(ResponseHandlers.search_handler)
    )
  end

  def show
    result = Imdb::Client.new.search_by_id(
      media_params[:id]
    )
    response_serializer(
      result.handle(ResponseHandlers.detail_handler)
    )
  end

  private

  def media_params
    params.permit(:id, :title, :year, :page)
  end

  def response_serializer(response)
    if response.is_a? Fault
      render status: response.code
    else
      render json: response
    end
  end
end
