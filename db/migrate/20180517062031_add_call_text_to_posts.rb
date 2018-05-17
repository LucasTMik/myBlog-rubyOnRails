class AddCallTextToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :callText, :text
  end
end
