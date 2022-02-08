import {
    displayRecipes,
    createTag,
    orderList
} from "./globalFunctions.js"

const dropdownAppliance = document.querySelector('.dropdown__appliance')
const arrow = dropdownAppliance.querySelector('.arrow')
const InputAppliance = document.querySelector('.dropdown__appliance input')
const dropdownButton = document.querySelector('.dropdown__appliance button')

export const onclickAppliancesDropDown = (DATA) => {
    dropdownAppliance.addEventListener('click', () => {

        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
            dropdownButton.ariaExpanded = "false";

        } else {
            displayList()
            dropdownButton.ariaExpanded = "true";
            displayFilteredDropdownAppliance(DATA)
            onClickApplianceLi(DATA)
            onInputAppliance(DATA)
        }
    })
}

const displayList = () => {
    const dropdownButton = document.querySelector('.dropdown__appliance button')
    const dropdownOpened = document.querySelector('.display')
    const reversedArrows = document.querySelectorAll('.arrow__reverse')

    // reversedArrows.forEach(el => el.classList.remove('arrow__reverse'))
    for (let i = 0; i < reversedArrows.length; i++) {
        const el = reversedArrows[i];
        el.classList.remove('arrow__reverse')
    }
    if (dropdownOpened) {
        dropdownOpened.classList.remove('display')
        dropdownButton.ariaExpanded = "false";
    }
    dropdownButton.ariaExpanded = "true";
    dropdownAppliance.classList.add('display')
    arrow.classList.add('arrow__reverse')
    InputAppliance.focus()
}

const hideList = () => {
    const dropdownButton = document.querySelector('.dropdown__appliance button')
    dropdownButton.ariaExpanded = "false";
    dropdownAppliance.classList.remove('display')
    arrow.classList.remove('arrow__reverse')

}

const onInputAppliance = (DATA) => {

    InputAppliance.addEventListener('input', () => {
        searchAppliance(DATA, InputAppliance.value)
        onClickApplianceLi(DATA)
    })
}

const searchAppliance = (DATA, inputValue) => {
    // chercher dans tous les ustensiles
    // on va récupérer tous les ustensiles qui sont dans les recettes en display == true
    const myAppliance = []
    for (let i = 0; i < DATA.length; i++) {
        const recipe = DATA[i];
        if (recipe.display) {
            myAppliance.push(recipe.appliance)
        }
    }

    // Conserve une seule apparition de l'ustensile:
    const filteredAppliances = myAppliance.filter((item, index) => {
        return myAppliance.indexOf(item) == index
    })

    let applianceToShow = []

    if (inputValue.length >= 3) {
        for (let i = 0; i < filteredAppliances.length; i++) {
            const appl = filteredAppliances[i];
            if (appl.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0) {
                applianceToShow.push(appl)
            }
        }

    } else {
        applianceToShow = filteredAppliances
    }

    // Creation de la liste du dropdown
    createFilterList(applianceToShow)

}


export const filteringDataAppliance = (DATA, appliance) => {
    for (let i = 0; i < DATA.length; i++) {
        const recipe = DATA[i];
        if (recipe.display) {
            if (recipe.appliance.toLowerCase() !== appliance) {
                recipe.display = false
            }
        }

    }

    return DATA
}

export const onClickApplianceLi = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__appliance li")
    for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        li.addEventListener("click", () => {

            const content = li.innerHTML.toLowerCase()
            createTag(content, 'appliance', DATA)

            // ON FILTRE LES DATA
            const newData = filteringDataAppliance(DATA, content)

            // ON RÉUTILISE LES DATA FILTRÉES
            displayRecipes(newData)
            displayFilteredDropdownAppliance(DATA)
        })

    }

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
    const blocList = document.querySelector('.appliance-list')
    blocList.innerHTML = ''
    blocList.append(list)

}


const displayFilteredDropdownAppliance = (DATA) => {
    // on va récupérer tous les ustensiles qui sont dans les recettes en display == true
    const myAppliance = []
    for (let i = 0; i < DATA.length; i++) {
        const recipe = DATA[i];
        if (recipe.display) {
            myAppliance.push(recipe.appliance)
        }
    }

    // Conserve une seule apparition de l'ustensile:
    const filteredAppliance = myAppliance.filter((item, index) => {
        return myAppliance.indexOf(item) == index

    })

    // Creation de la liste du dropdown
    createFilterList(filteredAppliance)

}