## OMDB consumer

API exposes [OMDB](http://www.omdbapi.com) API 

## Dependencies

* Ruby 2.6.5
* Node >= 12.14.0

## Apps info
 * Rails app runs in port 4567 (using this default config)
 * React app runs in port 3000 (using this default config)

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
```

5. Run
```
docker-compose up
```

## Full install

1. Install dependencies
```
brew install node
\curl -sSL https://get.rvm.io | bash
rvm install "ruby-2.6.5"
rvm use 2.6.5
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
```

6. Run in command line next:
```
bundle install
```

7. run backend (on aterminal window)
```
rails server --binding 0.0.0.0 --port 4567
```