class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :poster
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
