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

    describe "#show" do
      it "returns a successful response with a valid id" do
        VCR.use_cassette(
              "imdb/show_movie",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
              get :show, params: { id: "tt9561862" }
        end

        expect(response.status).to eq 200
      end
      it "returns a 404 response with an invalid id" do
        VCR.use_cassette(
              "imdb/show_movie_error",
              match_requests_on: [:body],
              re_record_interval: 30.days
            ) do
              get :show, params: { id: "holamundo" }
        end

        expect(response.status).to eq 404
      end
    end
  end