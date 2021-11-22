class CreateScreenings < ActiveRecord::Migration[6.1]
  def change
    create_table :screenings do |t|
      t.string :schedule
      t.integer :room
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
