class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :city
      t.string :state
      t.integer :slope
      t.integer :rating

      t.timestamps
    end
  end
end
