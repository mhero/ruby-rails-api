class MediaController < ApplicationController
  def index
    result = Imdb::Client.new.search_by_title(
      media_params[:title],
      media_params
    )
    render json: result.handle(Medium)
  end

  def media_params
    params.permit(:title, :year)
  end
end
