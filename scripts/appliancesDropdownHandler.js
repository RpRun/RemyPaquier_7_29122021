import { displayRecipes, createTag, orderList} from "./globalFunctions.js"

const dropdownAppliance = document.querySelector('.dropdown__appliance')
// const dropdownApplianceItemsList = document.querySelector('.dropdown__appliance li')
// const dropdown = document.querySelector('.dropdown__appliance')
const arrow = dropdownAppliance.querySelector('.arrow')
// const input = dropdownAppliance.querySelector('input')
const InputAppliance = document.querySelector('.dropdown__appliance input')


export const onclickAppliancesDropDown = (DATA) => {
    dropdownAppliance.addEventListener('click', () => {
        if (arrow.classList.contains('arrow__reverse')) {
            hideList()
        } else {
            displayList()
            displayFilteredDropdownAppliance(DATA)
            onClickApplianceLi(DATA)
            onInputAppliance(DATA)    
        }
    })
}

const displayList = () => {
    dropdownAppliance.classList.add('display')
    arrow.classList.add('arrow__reverse')
    InputAppliance.focus()
    
}

const hideList = () => {
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
    DATA.forEach((recipe) => {
        if (recipe.display) {
            myAppliance.push(recipe.appliance)
        }
    })
    // Conserve une seule apparition de l'ustensile:
    // const filteredAppliances = myAppliance.filter((item, index) => {
    //     return myAppliance.indexOf(item) == index
    // })

    let applianceToShow = []

    if(inputValue.length >= 3) {
        filteredAppliances.forEach(appl => {
            if(appl.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0) {
                applianceToShow.push(appl)
            }
        });
    } else {
        applianceToShow = filteredAppliances
        console.log(myAppliance)
    }
    console.log('hello filterlist')
    // Creation de la liste du dropdown
    // createFilterList(filteredAppliance)
    const list = document.createElement(`ul`)

    // Classement des elements par ordre alphabetique, reste le probleme des accents
    orderList(filteredAppliance )
    for (let i = 0; i < filteredAppliance .length; i++) {
        const ustensils = filteredAppliance[i];
        const li = document.createElement("li")
        li.innerHTML = ustensils
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.ustensils-list')
    blocList.innerHTML = ''
    blocList.append(list)
    console.log(applianceToShow)
    
    
}




const filteringData = (DATA, appliance) => {
    DATA.forEach(recipe => {
        if (recipe.display) {
            if (recipe.appliance.toLowerCase() !== appliance) {
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
    // on va récupérer tous les ustensiles qui sont dans les recettes en display == true
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
    // createFilterList(filteredAppliance)
    const list = document.createElement(`ul`)

    // Classement des elements par ordre alphabetique, reste le probleme des accents
    orderList(filteredAppliance )
    for (let i = 0; i < filteredAppliance .length; i++) {
        const ustensils = filteredAppliance[i];
        const li = document.createElement("li")
        li.innerHTML = ustensils
        list.append(li)
        list.setAttribute(`tab-index`, 0)
        li.setAttribute(`tab-index`, 0)
    }

    // Insertion du "bloc liste" au niveau de la liste
    const blocList = document.querySelector('.ustensils-list')
    blocList.innerHTML = ''
    blocList.append(list)
}

