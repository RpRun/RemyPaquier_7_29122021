export const createTag = (content, type) => {
    const tagsList = document.querySelector('.tagsList')
    const div = document.createElement('div')
    div.classList.add('tag')

    switch (type) {
        case 'ingredient':
            div.classList.add('tag--ingredients')
            break;
        case 'ustencil':
            div.classList.add('tag--appliance')
            break
        default:
            div.classList.add('tag--ustensils')
            break;
    }
    div.innerHTML = content
    tagsList.append(div)
}


export const displayRecipes = (DATA) => {
    const ul = document.querySelector('.thumbnails-list')
    // on enlève toutes les recettes
    ul.innerHTML = ''

    for (let i = 0; i < DATA.length; i++) {
        const recipe = DATA[i];

        // Si il y a le paramètre display == true
        if (recipe.display) {
            let ingredientsList
    
            for (let i = 0; i < recipe.ingredients.length; i++) {
                const recipeIngredient = recipe.ingredients[i];

                ingredientsList += `
                    <li class="recipe-list__item">${recipeIngredient.ingredient}:
                        <span class="recipe-list__item--quantity"> ${recipeIngredient.quantity} ${recipeIngredient.unit}
                        </span>
                    </li>
                `
            }

            const card = `
                <li class="thumbnails__card">
                    <img class="thumbnails__card--img" src="" alt="">
                    <h2 class="thumbnails__heading">${recipe.name}
                        <span class="thumbnails__heading--timeToCook">
                            <img src="./assets/icones/clock.png" alt="Temps de préparation">
                            ${recipe.time}min
                        </span>
                    </h2>
                    <div class="recipe">
                        <ul class="recipe__ingredients-list">
                            ${ingredientsList}
                        </ul>
                        <p class="recipe__instructions truncate-overflow">${recipe.description}</p>
                    </div>
                </li>`
    
            ul.innerHTML += card
        }
    }
}