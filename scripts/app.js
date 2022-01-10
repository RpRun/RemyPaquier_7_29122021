import {
    recipes
} from '../data/recipes.js'
import { getData } from './getData.js'
import { ingredientListHandler, onclickIngredientDropDown } from './onClickDropdown.js'
const DATA = recipes
// console.log('all recipes', recipes)

getData(DATA)
onclickIngredientDropDown()
ingredientListHandler(DATA)

