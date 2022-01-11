import {
    recipes
} from '../data/recipes.js'

import { getData } from './getData.js'
import { ingredientListHandler, onclickIngredientDropDown } from './ingredientDropdownHandler.js'
const DATA = recipes
// console.log('all recipes', recipes)

getData(DATA)

onclickIngredientDropDown()
ingredientListHandler(DATA)


// const cardsList = document.querySelector(".thumbnails-list")
// for(let i = 0; i < DATA.ingredients.length; i++) {
//     const card = createRecipeCard(DATA.ingredients[i])
//     cardsList.innerHTML += card
//     console.log(cardsList)
// }

