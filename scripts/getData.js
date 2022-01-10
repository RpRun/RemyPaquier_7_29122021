export const getData = (DATA) => {
    const myIngredients = []

DATA.forEach((recipe) => {
    // console.log('recipe one by one', recipe)

    recipe.ingredients.map((ingredientName) => myIngredients.push(ingredientName.ingredient))
   
})
// console.log('All ingredients with duplicates', myIngredients)

// Conserve une seule apparition de l'ingredient:
const filteredIngredients = myIngredients.filter((item, index) => {
    return myIngredients.indexOf(item) == index
})
console.log('All ingredients without duplicates', filteredIngredients)



const list = document.createElement(`ul`)
for (let i = 0; i < filteredIngredients.length; i++) {
    const ingredient = filteredIngredients[i];
    const li = document.createElement("li")
    li.innerHTML = ingredient
    list.append(li)
}
const blocList = document.querySelector('.dropdown__list')


const createList = blocList.append(list)

}




