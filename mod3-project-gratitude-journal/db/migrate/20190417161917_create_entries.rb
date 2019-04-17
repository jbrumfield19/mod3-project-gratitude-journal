class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :input1
      t.string :input2
      t.string :input3
      t.belongs_to :journal

      t.timestamps
    end
  end
end
