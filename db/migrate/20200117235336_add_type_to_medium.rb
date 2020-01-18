class AddTypeToMedium < ActiveRecord::Migration[6.0]
  def change
    add_column :media, :type, :string
  end
end
