FROM ruby:3.1.2-bullseye

ENV APP_HOME /myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN gem install bundler -v 2.3.3 && bundle config jobs 7

ADD Gemfile $APP_HOME/
ADD Gemfile.lock  $APP_HOME/
RUN bundle install

ADD Gemfile.tip $APP_HOME/
RUN bundle install

ADD . $APP_HOME
RUN rm -rf $APP_HOME/tmp