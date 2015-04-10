class MenuRecipesController < ApplicationController

  def update
    @menu = Menu.find(params[:menu_recipe][:menu_id])
    @menu_recipe = MenuRecipe.find_by(:recipe_id => params[:menu_recipe][:recipe_id], :menu_id => params[:menu_recipe][:menu_id])
    @menu_recipe.chef_id = current_user.id
    @menu_recipe.save
    # binding.pry
    @current_user = current_user.name
    @id = "#edit_menu_recipe_#{@menu_recipe.id}"

    respond_to do |f|
      f.js
    end 
  end
end