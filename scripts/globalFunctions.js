const tagsList = document.querySelector('.tagsList')
export const createTag = (content, type) => {

    const div = document.createElement('div')
    div.classList.add('tag')

    switch (type) {
        case 'ingredient':
            div.classList.add('tag--ingredients')
            break;
        case 'appliance':
            div.classList.add('tag--appliance')
            break
        case 'ustensils':
            div.classList.add('tag--ustensils')
            break
            //A eclaircir
        default:
            div.classList.add('tag--ustensils')
            break;
            //A eclaircir
    }
    div.innerHTML = content
    tagsList.append(div)
}


export const orderList = (element) => {

    const orderedList = element.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    })

    return orderedList;
}


export const displayRecipes = (DATA) => {
    const recipesList = document.querySelector('.thumbnails-list')
    // on enlève toutes les recettes
    recipesList.innerHTML = ''

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


            recipesList.innerHTML += card

        }

    }
}