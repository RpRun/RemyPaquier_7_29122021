import {
    recipes
} from '../data/recipes.js'

// console.log('all recipes', recipes)

const myIngredients = []

recipes.map((recipe) => {
    // console.log('recipe one by one', recipe)

    recipe.ingredients.map((ingredientName) => myIngredients.push(ingredientName.ingredient))
   
})
// console.log('All ingredients with duplicates', myIngredients)

// Conserve une seule apparition de l'ingredient:
const filteredIngredients = myIngredients.filter((item, index) => {
    return myIngredients.indexOf(item) == index
})
console.log('All ingredients without duplicates', filteredIngredients)



const list = `<ul>${filteredIngredients}</ul>`
const blocList = document.querySelector('.dropdown__list')


const createList = blocList.innerHTML += list
