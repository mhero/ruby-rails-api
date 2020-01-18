class  MediumDetail < ApplicationRecord
  def actors
    self[:actors].split(/\s*,\s*/) || self[:actors]
  end

  def genre
    self[:genre].split(/\s*,\s*/) || self[:genre]
  end

  def released
    Date.strptime(self[:released], "%d %b %y") || self[:released]
  end
end

# == Schema Information
#
# Table name: medium_details
#
#  id            :integer          not null, primary key
#  actors        :string
#  awards        :string
#  box_office    :string
#  country       :string
#  director      :string
#  dvd           :string
#  genre         :string
#  imdb_rating   :string
#  imdb_votes    :string
#  language      :string
#  metascore     :string
#  plot          :string
#  poster        :string
#  production    :string
#  rated         :string
#  released      :string
#  runtime       :string
#  title         :string
#  total_seasons :string
#  website       :string
#  writer        :string
#  year          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  imdb_id       :string
#
