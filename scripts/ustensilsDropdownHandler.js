import { displayRecipes, createTag, orderList } from "./globalFunctions.js"

const dropdownUstensils = document.querySelector('.dropdown__ustensils')
const arrow = dropdownUstensils.querySelector('.arrow')
const input = dropdownUstensils.querySelector('input')

export const onclickUstensilsDropDown = (DATA) => {
    dropdownUstensils.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
        } else {
            displayList()
            displayFilteredDropdownUstensils(DATA)
            onClickUstensilsLi(DATA)
            
        }
    })
}

const displayList = () => {
    dropdownUstensils.classList.add('display')
    arrow.classList.add('arrow__reverse')
    input.focus()
}

const hideList = () => {
    dropdownUstensils.classList.remove('display')
    arrow.classList.remove('arrow__reverse')
}

const filteringData = (DATA, ustensils) => {
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

            const goodRecipe = recipe.ustensils.find((ustensils) => ustensils.toLowerCase() == ustensils)

            if (!goodRecipe) {
                recipe.display = false
            }
            
        }
    });
    return DATA
}

export const onClickUstensilsLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ustensils li")
    
    lis.forEach(li => {
        li.addEventListener("click", () => {

            const content = li.innerHTML.toLowerCase()
            createTag(content, 'ustensils')

            // ON FILTRE LES DATA
            const newData = filteringData(DATA, content)

            // ON RÉUTILISE LES DATA FILTRÉES
            displayRecipes(newData)
            displayFilteredDropdownUstensils(DATA)
        })
    })
}


const displayFilteredDropdownUstensils = (DATA) => {
    // on va récupérer tous les ustenciles qui sont dans les recettes en display == true
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
    const list = document.createElement(`ul`)

    // Classement des elements par ordre alphabetique, reste le probleme des accents
    orderList(filteredUstensils)
    for (let i = 0; i < filteredUstensils.length; i++) {
        const ustensils = filteredUstensils[i];
        const li = document.createElement("li")
        li.innerHTML = ustensils
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
        console.log(li)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.ustensils-list')
    blocList.innerHTML = ''
    blocList.append(list)
    
}

