class RenamePrivateToExclusiveInVisits < ActiveRecord::Migration[6.1]
  def change
    rename_column :visits, :private, :exclusive
  
  end
end
