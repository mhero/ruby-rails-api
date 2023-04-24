source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem 'rails', '~> 7.0.4'

# Use Puma as the app server
gem "puma", "~> 6.2"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.2", require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rack-cors"

# API client
gem "faraday"
gem "faraday_middleware"
# env variables
gem "dotenv-rails"

# Elastic search
gem "elasticsearch-model"
gem "elasticsearch-rails"
gem "pry", "~> 0.14.2"
gem 'net-smtp', require: false
gem 'pg', '~> 1.5'

group :development, :test do
  # Call "byebug" anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "annotate"
end

group :development do
  gem "sqlite3"
  gem "listen", ">= 3.0.5", "< 3.9"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.1.0"
end

group :production do
 
end

group :test do
  gem "webmock"
  gem "vcr"
  gem "rspec-rails"
  gem "shoulda-matchers"
  gem "simplecov", require: false
end
