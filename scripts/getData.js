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
    list.setAttribute(`tab-index`,0)
    li.setAttribute(`tab-index`,0)  
}
const blocList = document.querySelector('.dropdown__list')


const createList = blocList.append(list)

}

export const createRecipeCard = (DATA) => {
    
const card = ` <li class="thumbnails__card">
<img class="thumbnails__card--img" src="" alt="">
<h2 class="thumbnails__heading">Limonade de Coco${DATA.ingredient} <span class="thumbnails__heading--timeToCook"> <img
            src="./assets/icones/clock.png" alt="Temps de préparation">10 min${DATA.time}</span></h2>
<div class="recipe">
    <ul class="recipe__ingredients-list">
        <li class="recipe-list__item">Lorem ipsum <span
                class="recipe-list__item--quantity">400G</span></li>
        <li class="recipe-list__item">sit amet consectetur <span
                class="recipe-list__item--quantity">400G</span></li>
        <li class="recipe-list__item">adipisicing elit. Ullam,?<span
                class="recipe-list__item--quantity">400G</span></li>
        <li class="recipe-list__item"> omnis commodi sunt maxime<span
                class="recipe-list__item--quantity">400G</span></li>
        <li class="recipe-list__item"> provident aspernatur<span
                class="recipe-list__item--quantity">400G</span></li>
    </ul>
    <p class="recipe__instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        pariatur molestias sapiente cupiditate consequatur consequuntur, temporibus quidem corporis
        inventore nulla. Asperiores, eos voluptatem? Praesentium numquam recusandae voluptates
        cupiditate placeat quidem! </p>
</div>
</li>`

const cardsList = document.querySelector(".thumbnails-list")
for (let i = 0; i < DATA.length; i++) {
    const recipeCard = DATA[i];
    recipeCard.innerHTML == card
    cardsList.append(recipeCard)
    // cardsList.innerHTML += card
    console.log(card)
}

// const createCard = cardsList.append(recipeCard)

}


