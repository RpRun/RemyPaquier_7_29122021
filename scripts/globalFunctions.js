import { filteringDataIngredients, displayFilteredDropdownIngredient } from "./ingredientDropdownHandler.js"

import { filteringDataAppliance } from "./appliancesDropdownHandler.js"
import { filteringDataUstensils } from "./ustensilsDropdownHandler.js"


export const createTag = (content, type) => {
    
    const cross = document.createElement('div')
    cross.classList.add('cross')
    cross.onclick = () => { deleteTag(cross) }
    cross.innerHTML = '<img src="./assets/icones/crossSVG.svg" alt="clicker pour supprimer le tag">'

    const tagsList = document.querySelector('.tagsList')
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
    div.append(cross)
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
                    <h2 class="thumbnails__heading"><span class="thumbnails__heading--recipeTitle"> ${recipe.name}</span>
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

export const deleteTag = (el) => {
    // supprime le tag
    const clickedTag = el.parentElement
    console.log(clickedTag )
    console.log(clickedTag.innerText )
    clickedTag.remove()

    // on recupere tous les tags restants
    const tagIngredients = document.querySelectorAll('.tag--ingredients')
    const tagUstensils = document.querySelectorAll('.tag--ustensils')
    const tagAppliance = document.querySelectorAll('.tag--appliance')

    // on remet à zéro la DATA
    
    // on crée une nouvelle data (newData):
    let newData;

    // en bouclant sur chaque ingrédient
    tagIngredients.forEach(tag => {

        const ingredients = tag.firstChild
        const content = ingredients.innerHTML.toLowerCase()
        // allActivesTags.push(activeTag)
        const newData = filteringDataIngredients(DATA, content)
    
        
        
    })
    
    displayRecipes(newData)
    displayFilteredDropdownIngredient(DATA)
    // puis sur chaque appareil
    // tagUstensils.forEach(tag => {
    //     const activeTag = tag.firstChild

        // allActivesTags.push(activeTag)
        // console.log(activesTags)

    //     newData = filteringDataUstensils(DATA, activeTag)
    // })
    

    // puis sur chaque ustensile
    // tagAppliance.forEach(tag => {
    //     const activeTag = tag.firstChild

        // allActivesTags.push(activeTag)
        // console.log(activesTags)

    //     newData = filteringDataAppliance(DATA, allActivesTags)
    // console.log(DATA)
    // })
    

    
    // allActivesTags.forEach(activeTag => {
    //     console.log(activeTag)
        
    // })
    // newData = filteringData(allActivesTags)
    // console.log(newData)
    

}