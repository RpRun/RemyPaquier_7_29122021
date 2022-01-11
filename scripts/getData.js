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
// console.log('All ingredients without duplicates', filteredIngredients)


// Creation de la liste du dropdown
const list = document.createElement(`ul`)
for (let i = 0; i < filteredIngredients.length; i++) {
    const ingredient = filteredIngredients[i];
    const li = document.createElement("li")
    li.innerHTML = ingredient
    list.append(li)
    list.setAttribute(`tab-index`,0)
    li.setAttribute(`tab-index`,0)  
}

// Insertion du "bloc liste" au niveau de la liste
const blocList = document.querySelector('.dropdown__list')

const createList = blocList.append(list)

// Creation des cartes pour chaque recette
const createRecipeCard = (DATA) => {

   
        
    const cardsList = document.querySelector(".thumbnails-list")
    for (let i = 0; i < DATA.length; i++) {
        
        const recipeCard = DATA[i];
        
        console.log(recipeCard)


  

       
        let ingredientsList = ' '
        recipeCard.ingredients.forEach(ingredient => {
            ingredientsList += `<li class="recipe-list__item">${recipeCard.ingredients}<span
            class="recipe-list__item--quantity">400G</span></li>`
        })
        console.log(recipeCard.ingredients)

        const card = ` <li class="thumbnails__card">
    <img class="thumbnails__card--img" src="" alt="">
    <h2 class="thumbnails__heading">${recipeCard.name} <span class="thumbnails__heading--timeToCook"> <img
                src="./assets/icones/clock.png" alt="Temps de préparation">${recipeCard.time}min</span></h2>
    <div class="recipe">
        <ul class="recipe__ingredients-list">
            ${ingredientsList}
        </ul>
        <p class="recipe__instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            pariatur molestias sapiente cupiditate consequatur consequuntur, temporibus quidem corporis
            inventore nulla. Asperiores, eos voluptatem? Praesentium numquam recusandae voluptates
            cupiditate placeat quidem! </p>
    </div>
    </li>`

    cardsList.innerHTML += card
    }
      
    }             
    createRecipeCard(DATA)
    
}




