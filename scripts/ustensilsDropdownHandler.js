import { displayRecipes, createTag, orderList } from "./globalFunctions.js"

const dropdownUstensils = document.querySelector('.dropdown__ustensils')
const arrow = dropdownUstensils.querySelector('.arrow')
const inputUstensils = dropdownUstensils.querySelector('input')
const dropdownButton = document.querySelector('.dropdown__ustensils button')

export const onclickUstensilsDropDown = (DATA) => {
    dropdownUstensils.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
            dropdownButton.ariaExpanded = "false";
        } else {
            displayList()
            dropdownButton.ariaExpanded = "true";
            displayFilteredDropdownUstensils(DATA)
            onClickUstensilLi(DATA)
            onKeyboardUstensilsLi(DATA)
            onInputUstensils(DATA)
        }
    })
}

// Gestion du dropdown au clavier
export const onKeyboardUstensilsFilters = (DATA) => {
    dropdownUstensils.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideList()
            dropdownButton.ariaExpanded = "false";
        }
         if (e.key === 'Enter') {            
            displayList()
            dropdownButton.ariaExpanded = "true";
            displayFilteredDropdownUstensils(DATA)
            onClickUstensilLi(DATA)
            onKeyboardUstensilsLi(DATA)
            onInputUstensils(DATA)
        }
    })
    
}

const displayList = () => {
    const dropdownOpened = document.querySelector('.display')
    const reversedArrows = document.querySelectorAll('.arrow__reverse')
    reversedArrows.forEach(el => el.classList.remove('arrow__reverse'))

    if (dropdownOpened) {
        dropdownOpened.classList.remove('display')
        dropdownButton.ariaExpanded = "false";
    }
    dropdownButton.ariaExpanded = "true";
    dropdownUstensils.classList.add('display')
    arrow.classList.add('arrow__reverse')
    inputUstensils.focus()
}

const hideList = () => {
    dropdownButton.ariaExpanded = "false";
    dropdownUstensils.classList.remove('display')
    arrow.classList.remove('arrow__reverse')
}

const onInputUstensils = (DATA) => {
   
    inputUstensils.addEventListener('input', () => {
        searchUstensils(DATA, inputUstensils.value)
        onClickUstensilLi(DATA)
        onKeyboardUstensilsLi(DATA)
    })
}

const searchUstensils = (DATA, inputValue) => {
    // chercher dans tous les ustensiles
    // on va récupérer tous les ustensiles qui sont dans les recettes en display == true
    const myUstensils = []
    DATA.forEach((recipe) => {
        if (recipe.display) {
            recipe.ustensils.map((ustensilsName) => myUstensils.push(ustensilsName))
        }
    })
    // Conserve une seule apparition de l'ingredient:
    const filteredUstensils = myUstensils.filter((item, index) => {
        return myUstensils.indexOf(item) == index
    })

    let UstensilsToShow = []
    if(inputValue.length >= 3) {
        filteredUstensils.forEach(ust => {
            if(ust.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0) {
                UstensilsToShow.push(ust)
            }
        });
    } else {
        UstensilsToShow = filteredUstensils
    }
    createFilterList(UstensilsToShow)
}


export const filteringDataUstensils = (DATA, ustensils) => {    
    DATA.forEach(recipe => {
        if (recipe.display) {

            const goodRecipe = recipe.ustensils.find((el) => el.toLowerCase() == ustensils)
            
            if (!goodRecipe) {
                recipe.display = false
            }
        }
    });
    return DATA
}


export const onClickUstensilLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ustensils li")
    
    lis.forEach(li => {
        li.addEventListener("click", () => {

            const content = li.innerHTML.toLowerCase()
            createTag(content, 'ustensils', DATA)

            // ON FILTRE LES DATA
            const newData = filteringDataUstensils(DATA, content)

            // ON RÉUTILISE LES DATA FILTRÉES
            displayRecipes(newData)
            displayFilteredDropdownUstensils(DATA)
        })
    })
}
// gestion des tags au clavier
export const onKeyboardUstensilsLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ustensils li")
    lis.forEach(li => {
        li.addEventListener("keydown", (e) => {
            if (e.key === 'Enter') {

                const content = li.innerHTML.toLowerCase()
                createTag(content, 'ustensil', DATA)
    
                // ON FILTRE LES DATA
                const newData = filteringDataUstensils(DATA, content)
    
                // ON RÉUTILISE LES DATA FILTRÉES
                displayRecipes(newData)
                displayFilteredDropdownUstensils(DATA)
            }
           
        })
    })
}


const createFilterList = (elementToShow) => {
    // Creation de la liste du dropdown
    const list = document.createElement(`ul`)

    // Classement des elements par ordre alphabetique
    orderList(elementToShow)
    for (let i = 0; i < elementToShow.length; i++) {
        const element = elementToShow[i];
        const li = document.createElement("li")
        li.innerHTML = element
    
        list.append(li)
        list.setAttribute(`tabindex`, -1)
        li.setAttribute(`tabindex`, 0)

    }
    // Insertion du "bloc liste" au niveau de la liste ustensiles
    const blocList = document.querySelector('.ustensils-list')
    blocList.innerHTML = ''
    blocList.append(list)

}


export const displayFilteredDropdownUstensils = (DATA) => {
    // on va récupérer tous les ustensiles qui sont dans les recettes en display == true
    const myUstensils = []

    DATA.forEach((recipe) => {
        if (recipe.display) {
            recipe.ustensils.map((ustensilsName) => myUstensils.push(ustensilsName))
        }

    })
    // Conserve une seule apparition de l'ustensile:
    const filteredUstensils = myUstensils.filter((item, index) => {
        return myUstensils.indexOf(item) == index
    })

    // Creation de la liste du dropdown
    createFilterList(filteredUstensils)

}