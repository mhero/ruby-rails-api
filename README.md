## OMDB consumer

API exposes [OMDB](http://www.omdbapi.com) API

## Dependencies

* Ruby 3.1.0
* Node >= 12.14.0

## Apps info
 * Rails app runs in port 3000 (using this default config)
 * React app runs in port 8084 (using this default config)

## Local Development
## Docker install

1. Install dependencies
```
https://www.docker.com/products/docker-desktop
```

2. Clone repository
3. cd into repository folder

4. Create env files for rails and react (replace variables with credentials and server variables)
```
cp .env.example .env
cp ./omdb-react/.env.example ./omdb-react/.env
```

5. Run
```
docker-compose up
```

6. Rails debug
```
docker exec -it $( docker ps | grep ruby-rails-api | awk "{print \$1}" | head -n 1 ) rails c
```

## Full install

1. Install dependencies
```
brew install node
\curl -sSL https://get.rvm.io | bash
rvm install "ruby-3.1.0"
rvm use 3.1.0
brew install postgresql
```

2. Clone repository
3. cd into repository folder

4. Run in command line next:

```
gem install bundler && bundle config jobs 7
```

5. Create env files for rails and react (replace variables with credentials and server variables)
```
cp .env.example .env
cp ./omdb-react/.env.example ./omdb-react/.env
```

6. Replace file with credentials of local postgres db(in development section)
```
database.yml
```

7. Run in command line next:
```
bundle install
cd omdb-react && npm install
```

8. run backend (on aterminal window)
```
rails server --binding 0.0.0.0 --port 4567
```

9. run frontend (on a different terminal window)

```
cd omdb-react && npm start
```

# Related read

https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-docker.html