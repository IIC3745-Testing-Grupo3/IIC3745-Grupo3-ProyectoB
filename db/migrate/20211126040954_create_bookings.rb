class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.text :booker
      t.datetime :date
      t.string :row
      t.integer :column
      t.references :screening, null: false, foreign_key: true

      t.timestamps
    end
  end
end
