class Cuisine < ActiveRecord::Base

  # has_many :recipe_cuisines
  has_many :recipes #through: :recipe_cuisines

  CUISINES = ["Mexican", "Italian", "American", "African", "Hungary", "American-South", "Hawaiian", "", nil, "Brazilian", "English", "Japanese", "Asian", "Chinese-canadian", "Spanish", "american", "Chinese", "Caribbean", "Middle Eastern", "South African", "Greek", "German", "Thai", "French", "Dessert"]

end
