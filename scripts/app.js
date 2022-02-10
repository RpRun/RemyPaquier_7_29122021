import { recipes } from '../data/recipes.js';
import { inputPrincipal } from './inputPrincipalHandler.js';
import { displayRecipes } from './globalFunctions.js';
import { onclickIngredientDropDown, onKeyboardIngredientLi, onKeyboardIngredientsFilters } from './ingredientDropdownHandler.js';
import { onclickUstensilsDropDown, onKeyboardUstensilsLi, onKeyboardUstensilsFilters } from './ustensilsDropdownHandler.js';
import { onclickAppliancesDropDown, onKeyboardAppliancesLi, onKeyboardAppliancesFilters } from './appliancesDropdownHandler.js';
export const DATA = recipes
DATA.forEach(recipe => { recipe.display = true });

displayRecipes(DATA)


// ingredients
onclickIngredientDropDown(DATA)
onKeyboardIngredientLi(DATA)
onKeyboardIngredientsFilters(DATA)


// Ustencils
onclickUstensilsDropDown(DATA)
onKeyboardUstensilsLi(DATA)
onKeyboardUstensilsFilters(DATA)

// Appareil
onclickAppliancesDropDown(DATA)
onKeyboardAppliancesLi(DATA)
onKeyboardAppliancesFilters(DATA)


// Global search
inputPrincipal()