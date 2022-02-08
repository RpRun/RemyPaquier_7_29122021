import { recipes } from '../data/recipes.js';
import { inputPrincipal } from './inputPrincipalHandler.js';
import { displayRecipes } from './globalFunctions.js';
import { onclickIngredientDropDown } from './ingredientDropdownHandler.js';
import { onclickUstensilsDropDown } from './ustensilsDropdownHandler.js';
import { onclickAppliancesDropDown } from './appliancesDropdownHandler.js';
export const DATA = recipes

// DATA.forEach(recipe => { recipe.display = true });
 for (let i = 0; i < DATA.length; i++) {
    const recipe = DATA[i];
    recipe.display = true
}

displayRecipes(DATA)


// ingredients
onclickIngredientDropDown(DATA)

// Ustencils
onclickUstensilsDropDown(DATA)

// Appareil
onclickAppliancesDropDown(DATA)

// Global search
inputPrincipal()