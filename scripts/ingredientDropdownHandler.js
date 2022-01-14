import { displayRecipes, createTag } from "./globalFunctions.js"

const dropdownIngredient = document.querySelector('.dropdown__ingredient')
const arrow = dropdownIngredient.querySelector('.arrow')
const input = dropdownIngredient.querySelector('input')

export const onclickIngredientDropDown = (DATA) => {
    dropdownIngredient.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
        } else {
            displayList()
            displayFilteredDropdownIngredient(DATA)
            onClickIngredientsLi(DATA)
            
        }
    })
}

const displayList = () => {
    dropdownIngredient.classList.add('display')
    arrow.classList.add('arrow__reverse')
    input.focus()
}

const hideList = () => {
    dropdownIngredient.classList.remove('display')
    arrow.classList.remove('arrow__reverse')
}

const filteringData = (DATA, ingredients) => {
    // const fakeDATA = [
    //     {
    //         ingredients: ['toto', 'tata'],
    //         ustencil: 'saladier'
    //     },
    //     {
    //         ingredients: ['toto', 'tata'],
    //         ustencil: 'saladier'
    //     },
    //     {
    //         ingredients: ['toto', 'tata'],
    //         ustencil: 'saladier',
    //         display: true
    //     }
    // ]

    DATA.forEach(recipe => {
        if (recipe.display) {

            const goodRecipe = recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredients)

            if (!goodRecipe) {
                recipe.display = false
            }
            
        }
    });
    return DATA
}

export const onClickIngredientsLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ingredient li")
    
    lis.forEach(li => {
        li.addEventListener("click", () => {

            const content = li.innerHTML.toLowerCase()
            createTag(content, 'ingredient')

            // ON FILTRE LES DATA
            const newData = filteringData(DATA, content)

            // ON RÉUTILISE LES DATA FILTRÉES
            displayRecipes(newData)
            displayFilteredDropdownIngredient(DATA)
        })
    })
}


const displayFilteredDropdownIngredient = (DATA) => {
    // on va récupérer tous les ingredients qui sont dans les recettes en display == true
    const myIngredients = []

    DATA.forEach((recipe) => {
        if (recipe.display) {
            recipe.ingredients.map((ingredientName) => myIngredients.push(ingredientName.ingredient))
        }

    })
    // Conserve une seule apparition de l'ingredient:
    const filteredIngredients = myIngredients.filter((item, index) => {
        return myIngredients.indexOf(item) == index
        
    })
    
    // Creation de la liste du dropdown
    const list = document.createElement(`ul`)
    for (let i = 0; i < filteredIngredients.length; i++) {
        const ingredient = filteredIngredients[i];
        const li = document.createElement("li")
        li.innerHTML = ingredient
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.ingredient-list')
    blocList.innerHTML = ''
    blocList.append(list)
    console.log(list)
}

