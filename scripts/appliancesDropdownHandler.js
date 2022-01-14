import { displayRecipes, createTag } from "./globalFunctions.js"

const dropdownAppliance = document.querySelector('.dropdown__appliance')
const arrow = dropdownAppliance.querySelector('.arrow')
const input = dropdownAppliance.querySelector('input')

export const onclickAppliancesDropDown = (DATA) => {
    dropdownAppliance.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
        } else {
            displayList()
            displayFilteredDropdownAppliance(DATA)
            onClickApplianceLi(DATA)
            
        }
    })
}

const displayList = () => {
    dropdownAppliance.classList.add('display')
    arrow.classList.add('arrow__reverse')
    input.focus()
}

const hideList = () => {
    dropdownAppliance.classList.remove('display')
    arrow.classList.remove('arrow__reverse')
}

const filteringData = (DATA, appliance) => {
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

            const goodRecipe = recipe.appliance.find((appliance) => appliance.toLowerCase() == appliance)

            if (!goodRecipe) {
                recipe.display = false
            }
            
        }
    });
    return DATA
}

export const onClickApplianceLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__appliance li")
    
    lis.forEach(li => {
        li.addEventListener("click", () => {

            const content = li.innerHTML.toLowerCase()
            createTag(content, 'appliance')

            // ON FILTRE LES DATA
            const newData = filteringData(DATA, content)

            // ON RÉUTILISE LES DATA FILTRÉES
            displayRecipes(newData)
            displayFilteredDropdownAppliance(DATA)
        })
    })
}


const displayFilteredDropdownAppliance = (DATA) => {
    // on va récupérer tous les ustenciles qui sont dans les recettes en display == true
    const myAppliance = []

    DATA.forEach((recipe) => {
        if (recipe.display) {
            
            myAppliance.push(recipe.appliance)
        }
        
    })
    // Conserve une seule apparition de l'ustensile:
    const filteredAppliance = myAppliance.filter((item, index) => {
        return myAppliance.indexOf(item) == index
        
    })
    
    // Creation de la liste du dropdown
    const list = document.createElement(`ul`)
    for (let i = 0; i < filteredAppliance.length; i++) {
        const appliance = filteredAppliance[i];
        const li = document.createElement("li")
        li.innerHTML = appliance
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.appliance-list')
    blocList.innerHTML = ''
    blocList.append(list)
    console.log(list)
}

