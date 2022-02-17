import { recipes } from '../data/recipes.js';
import { inputPrincipal } from './inputPrincipalHandler.js';
import { displayRecipes, closeDropdown } from './globalFunctions.js';
import { onclickIngredientDropDown, onKeyboardIngredientLi, onKeyboardIngredientsFilters } from './ingredientDropdownHandler.js';
import { onclickUstensilsDropDown, onKeyboardUstensilsLi, onKeyboardUstensilsFilters } from './ustensilsDropdownHandler.js';
import { onclickAppliancesDropDown, onKeyboardAppliancesLi, onKeyboardAppliancesFilters } from './appliancesDropdownHandler.js';
export const DATA = recipes

// DATA.forEach(recipe => { recipe.display = true });
for (let i = 0; i < DATA.length; i++) {
    const recipe = DATA[i];
    recipe.display = true
}

displayRecipes(DATA);

// ingredients
onclickIngredientDropDown(DATA);
onKeyboardIngredientLi(DATA);
onKeyboardIngredientsFilters(DATA);


// Ustencils
onclickUstensilsDropDown(DATA);
onKeyboardUstensilsLi(DATA);
onKeyboardUstensilsFilters(DATA);

// Appareil
onclickAppliancesDropDown(DATA);
onKeyboardAppliancesLi(DATA);
onKeyboardAppliancesFilters(DATA);


// Global search
inputPrincipal(DATA);

// window event
closeDropdown();