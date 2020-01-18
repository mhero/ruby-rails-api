- I had in mind that would be better to have 2 separated projects but in the same repo, some reasons:
  - Unified versioning, one source of truth
  - Extensive code sharing and reuse
  - Simplified dependency management
  - Atomic changes
  - Collaboration across teams

Backend:
- I'm using pretty much standard Rails API config,with all endpoints in one controller(because it's a small app)
- I'm serializing my response, to have it consumed by the client easily
- I'm returning, in the mentioned response, models created by me to:
  - Add some extra functionality(e.g. format date, actors)
  - Possibly have it cached on my server(if allowed, or temporary cache)
  - Throw my own statuses(e.g. OMDB doesn't throw 204 or 404 when a search was empty)
- For the services
  - I'm authorizing (in IMDB::Auth) using OMDB API using the keys from my account, according to what the service expects
  - Using a IMDB::Http to create requests to OMDB API
  - Using Faraday because:
    - It's reliable
    - I can change the adapter(I'm using the default: Net::HTTP)
    - Great middleware, to allow catch and log server errors on OMDB API(including timeouts)
  - I'm logging all errors because I think it's important to have a trace without giving the client too much info
  - Using IMDB::Client to handle all requests to IMDB::Http
  - Finally ResponseHandler is used to:
    - Check OMDB's response status
    - Validate OMDB's response content(e. g. if it's empty or not)
    - Return the parsed results from OMDB response

Testing:
  - I added some tests using rspec, vcr and simplecov
  - Using vcr to avoid hitting OMDB's API for every test
  - Checking the body on the vcr cassette, because the whole response is not deterministic
  - Using simplecov as a measure
