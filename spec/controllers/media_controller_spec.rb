require "rails_helper"

RSpec.describe MediaController do
    describe "index" do
      context "when searching by title" do
        it "returns 200 with valid params" do
          VCR.use_cassette(
              "imdb/movie",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
            get :index, params: { title: "hulk"}
          end
    
          expect(response.status).to eq 200
        end
    
        it "returns 404 with invalid params" do
          VCR.use_cassette(
              "imdb/movie_error",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
              get :index, params: { title: "nonononononono" }
          end
          expect(response.status).to eq 404
        end
      end

      context "when searching by year" do
        it "returns 200 with valid params" do
          VCR.use_cassette(
              "imdb/movie_year",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
            get :index, params: { title: "Fight Club", year: 1999 }
          end
    
          expect(response.status).to eq 200
        end

        it "returns 404 with invalid params" do
          VCR.use_cassette(
              "imdb/movie_year_error",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
              get :index, params: { year: "nonononononono" }
          end
          expect(response.status).to eq 404
        end
      end
    end
  end

