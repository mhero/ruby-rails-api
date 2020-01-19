class Medium < ApplicationRecord
end

# == Schema Information
#
# Table name: media
#
#  id         :bigint           not null, primary key
#  poster     :string
#  title      :string
#  type       :string
#  year       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  imdb_id    :string
#
