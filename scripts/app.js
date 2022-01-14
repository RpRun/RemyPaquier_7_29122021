import { recipes } from '../data/recipes.js'
import { displayRecipes } from './globalFunctions.js';
import { onclickIngredientDropDown } from './ingredientDropdownHandler.js'
import { onclickUstensilsDropDown } from './UstensilsDropdownHandler.js'

export const DATA = recipes
DATA.forEach(recipe => { recipe.display = true });

displayRecipes(DATA)

// ingredients
onclickIngredientDropDown(DATA)

// Ustencils
onclickUstensilsDropDown(DATA)
// Appareil