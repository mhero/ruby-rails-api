class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.string :title
      t.string :year
      t.string :imdb_id
      t.string :poster
      t.timestamps
    end
  end
end
