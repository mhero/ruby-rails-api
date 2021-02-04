FROM ruby:2.6.6

ENV APP_HOME /myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN gem install bundler && bundle config jobs 7

ADD Gemfile $APP_HOME/
ADD Gemfile.lock  $APP_HOME/
RUN bundle install

ADD Gemfile.tip $APP_HOME/
RUN bundle install

ADD . $APP_HOME