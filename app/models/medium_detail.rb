class  MediumDetail < ApplicationRecord
  def actors
    self[:actors].split(/\s*,\s*/) || self[:actors]
  end

  def genre
    self[:genre].split(/\s*,\s*/) || self[:genre]
  end

  def released
    return self[:released] if self[:released] == "N/A"
    Date.strptime(self[:released], "%d %b %y") || self[:released]
  end
end

# == Schema Information
#
# Table name: medium_details
#
#  id            :integer          not null, primary key
#  title         :string
#  year          :string
#  rated         :string
#  released      :string
#  runtime       :string
#  genre         :string
#  director      :string
#  writer        :string
#  actors        :string
#  plot          :string
#  language      :string
#  country       :string
#  awards        :string
#  poster        :string
#  metascore     :string
#  imdb_rating   :string
#  imdb_votes    :string
#  imdb_id       :string
#  total_seasons :string
#  dvd           :string
#  box_office    :string
#  production    :string
#  website       :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
