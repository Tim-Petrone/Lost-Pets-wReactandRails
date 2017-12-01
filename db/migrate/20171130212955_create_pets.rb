class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :species
      t.string :name
      t.string :color
      t.string :place
      t.timestamp :time

      t.timestamps
    end
  end
end
