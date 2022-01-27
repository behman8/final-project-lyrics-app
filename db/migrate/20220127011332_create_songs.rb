class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :lyrics
      t.string :artist
      t.integer :time
      t.string :album
      t.belongs_to :user

      t.timestamps
    end
  end
end
