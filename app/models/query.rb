class Query < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
end

# == Schema Information
#
# Table name: queries
#
#  id         :bigint           not null, primary key
#  in_query   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
