class CreateMediumDetail < ActiveRecord::Migration[6.0]
  def change
    create_table :medium_details do |t|
      t.string :title
      t.string :year
      t.string :rated
      t.string :released
      t.string :runtime
      t.string :genre
      t.string :director
      t.string :writer
      t.string :actors
      t.string :plot
      t.string :language
      t.string :country
      t.string :awards
      t.string :poster
      t.string :metascore
      t.string :imdb_rating
      t.string :imdb_votes
      t.string :imdb_id
      t.string :total_seasons
      t.string :dvd
      t.string :box_office
      t.string :production
      t.string :website
      t.timestamps
    end
  end
end