class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :message
      t.belongs_to :user
      t.timestamps
    end
  end
end
