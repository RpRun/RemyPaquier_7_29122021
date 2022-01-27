import { displayRecipes, createTag,  orderList } from "./globalFunctions.js"

const dropdownIngredient = document.querySelector('.dropdown__ingredient')
// const dropdown = document.querySelector('.dropdown')
const arrow = dropdownIngredient.querySelector('.dropdown__ingredient .arrow')
const inputIngredient = document.querySelector('.dropdown__ingredient input')
// const input = dropdownIngredient.querySelector('input')

export const onclickIngredientDropDown = (DATA) => {
    dropdownIngredient.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
        } else {
            displayList()
            displayFilteredDropdownIngredient(DATA)
            onClickIngredientLi(DATA)
            onInputIngredient(DATA)
        }
    })
}

const displayList = () => {
    dropdownIngredient.classList.add('display')
    arrow.classList.add('arrow__reverse')
    inputIngredient.focus()
}

const hideList = () => {
    dropdownIngredient.classList.remove('display')
    arrow.classList.remove('arrow__reverse')
}

const onInputIngredient = (DATA) => {
   
    inputIngredient.addEventListener('input', () => {
        searchIngredients(DATA, inputIngredient.value)
        onClickIngredientLi(DATA)
    })
}

const searchIngredients = (DATA, inputValue) => {
    // chercher dans tous les ingredients
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

    let ingredientToShow = []

    if(inputValue.length >= 3) {
        filteredIngredients.forEach(ing => {
            if(ing.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0) {
                ingredientToShow.push(ing)
            }
        });
    } else {
        ingredientToShow = filteredIngredients
    }

    // createFilterList(ingredientToShow)
    // CA PEUT ETRE UNE FONCTION
    // Creation de la liste du dropdown
    const list = document.createElement(`ul`)
     // Classement des elements par ordre alphabetique, reste le probleme des accents
    // filteredIngredients.sort();
    orderList(ingredientToShow)
    for (let i = 0; i < ingredientToShow.length; i++) {
        const ingredient = ingredientToShow[i];
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
    onClickIngredientLi(DATA)
    // ICI
}
    



const filteringData = (DATA, ingredients) => {
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


export const onClickIngredientLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ingredient li")
    lis.forEach(li => {
        li.addEventListener("click", () => {

            // console.log('coucou');

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
    // createFilterList(filteredIngredients)
    // Creation de la liste du dropdown
    // createFilterList(filteredAppliance)
    const list = document.createElement(`ul`)

    // Classement des elements par ordre alphabetique, reste le probleme des accents
    orderList(filteredIngredients )
    for (let i = 0; i < filteredIngredients .length; i++) {
        const ingredients = filteredIngredients[i];
        const li = document.createElement("li")
        li.innerHTML = ingredients 
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.ingredient-list')
    blocList.innerHTML = ''
    blocList.append(list)
}
  

