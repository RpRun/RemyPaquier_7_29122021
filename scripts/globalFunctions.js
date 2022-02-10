import {
    filteringDataIngredients
} from "./ingredientDropdownHandler.js"
import {
    filteringDataAppliance
} from "./appliancesDropdownHandler.js"
import {
    filteringDataUstensils
} from "./ustensilsDropdownHandler.js"


export const createTag = (content, type, DATA) => {
    const cross = document.createElement('div')
    cross.classList.add('cross')
    cross.setAttribute('tabindex', '0')
    // cross.setAttribute('aria-label','cliquer pour enlever le filtre')
    cross.onclick = () => {
        deleteTag(cross, DATA)
    }
    // Gestion des tags au clavier
    cross.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            deleteTag(cross, DATA)
        }
    })

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
            //A modifier eventuellement
        default:
            div.classList.add('tag--ustensils')
            break;
            //A modifier eventuellement
    }
    div.innerHTML = `<span>${content}</span>`
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
            let ingredientsList = ''

            for (let i = 0; i < recipe.ingredients.length; i++) {
                const recipeIngredient = recipe.ingredients[i];

                ingredientsList += `
                    <li class="recipe-list__item">${recipeIngredient.ingredient}:
                        <span class="recipe-list__item--quantity"> ${recipeIngredient.quantity ? recipeIngredient.quantity : '' } ${recipeIngredient.unit ? recipeIngredient.unit : '' }
                        </span>
                    </li>
                `
            }

            const card = `
                <li tabindex="0" class="thumbnails__card">
                    <img class="thumbnails__card--img" src="https://picsum.photos/200/300?random=1" alt="random picture to simulate recipe's illustration">
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

export const deleteTag = (cross, DATA) => {

    DATA.forEach(recipe => {
        recipe.display = true
    });
    let newData = []

    // supprime le tag
    const clickedTag = cross.parentElement
    clickedTag.remove()

    // // on recupere tous les tags restants
    const tagIngredients = Array.from(document.querySelectorAll('.tag--ingredients'))
    const ingredientsContent = tagIngredients.map(tag => tag.querySelector('span').innerHTML.toLowerCase())

    // // en bouclant sur chaque ingrédient
    ingredientsContent.forEach(content => {
        newData = filteringDataIngredients(DATA, content)

    })

    const tagUstensils = Array.from(document.querySelectorAll('.tag--ustensils'))
    const ustensilsContent = tagUstensils.map(tag => tag.querySelector('span').innerHTML.toLowerCase())

    // // en bouclant sur chaque ustensile
    ustensilsContent.forEach(content => {
        newData = filteringDataUstensils(DATA, content)

    })

    const tagAppliance = Array.from(document.querySelectorAll('.tag--appliance'))
    const applianceContent = tagAppliance.map(tag => tag.querySelector('span').innerHTML.toLowerCase())

    // // en bouclant sur chaque ustensile
    applianceContent.forEach(content => {
        newData = filteringDataAppliance(DATA, content)

    })


    if (newData.length == 0) {
        newData = DATA
    }
    displayRecipes(newData)
}

// fermeture du dropdown quand on clic en dehors
export const closeDropdown = () => {
    const dropdownOpened = document.querySelector('.dropdown .display')
    const dropdownSection = document.querySelector('.dropdown-container')

    window.addEventListener('click', (e) => {
        console.log('window click')
        // dropdownOpened && 
        if (dropdownOpened && e.target != dropdownSection) {
            //import hideList?
            const dropdownButton = document.querySelector('.dropdown button')
            const arrow = dropdownOpened.querySelector('.arrow')
            dropdownOpened.classList.remove('display')
            arrow.classList.remove('arrow__reverse')
            dropdownButton.ariaExpanded = "false";
            console.log('ferme le dropdown')
            
        }

    })

}