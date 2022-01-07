import {
    recipes
} from '../data/recipes.js'



console.log('all recipes', recipes)

const myIngredients = []

recipes.map((recipe) => {
    console.log('One recipe', recipe)
    // recipe.ingredients.map((ingredient) => myIngredients.push(ingredient.ingredient))
    // console.log(myIngredients)
    recipe.ingredients.map((ingredient) => myIngredients.push(ingredient.ingredient) )
        

    
    console.log('All ingredients',myIngredients)
    
})
