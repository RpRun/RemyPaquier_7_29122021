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




export const inputPrincipal = () => {
const searchInput = document.querySelector("#search-bar-Field")


searchInput.addEventListener('input', (e) => {
    const searchedString = e.target.value.toLowerCase();
    const searchResults = document.querySelectorAll(".thumbnails__card")
    const searchResultList = document.querySelector(".thumbnails-list")
    const main = document.querySelector('main')
    const errorSearchMessage = document.querySelector('.error-message')
    const visibleRecipes = document.querySelectorAll(".thumbnails__card:not(.thumbnails__card--hidden)")
   
    // A partir de 3 lettres dans le champ de recherche, si la liste des recettes comporte les 3 lettres
    if (searchedString.length >= 3 && searchResultList.innerHTML.includes(searchedString)) {
        console.log('on tape + de 3 lettres et il y a un resultat')

        // on cache tout le monde
        searchResultList.classList.add("thumbnails__card--hidden")
        console.log('on cache la liste')
        // On fait reapparitre la liste des recettes
        // On boucle sur la liste des recettes
        for (let i = 0; i < searchResults.length; i++) {
            const searchResultItem = searchResults[i];
            searchResultItem.classList.add("thumbnails__card--hidden")
            searchResultList.classList.remove("thumbnails__card--hidden")
            console.log("on boucle, on cache toutes les cartes mais on fait reapparaitre la liste")
            // Si une des recettes comporte la chaine de charactere renseignée dans le champ de recherche
            if (searchResultItem.innerHTML.toLowerCase().includes(searchedString)) {
                // on fait reapparaitre cette recette
                console.log("on fait reapparaitre les resultats")
                
                searchResultItem.classList.remove("thumbnails__card--hidden") 
            }
        }       
    }  
    if(searchedString.length > 3 && visibleRecipes.length < 1 ) {
        
        errorSearchMessage.classList.add('error-message--displayed')
        console.log(" des cartes  sont  cachees on cache le message d erreur")
        // réafficher toute la liste
        // searchResultList.classList.remove("thumbnails__card--hidden")
        // console.log("on reaffiche la liste")
    }

    
    
    

    // if(visibleRecipes.length > 0) {
    //     // des recettes sont visibles, cacher le messsage d'erreur
       
    // } else {
    //     // aucune recette visible, afficher le message d'erreur

    //     errorSearchMessage.classList.remove('error-message--hidden')
    //     console.log(errorSearchMessage)
    //     console.log("on affiche le message car toutes les cartes sont cachees")
    // }
})




// searchInput.addEventListener('input', (e) => {
//     const searchedString = e.target.value.toLowerCase();
//     const searchResults = document.querySelectorAll(".thumbnails__card")
//     const searchResultList = document.querySelector(".thumbnails-list")

//     const errorSearchMessage = document.querySelector('.error-message')

//     const main = document.querySelector('main')
//     // Si on commence à renseigner le champs de recherche
//     if (searchedString.length > 0 || searchedString.length < 3) {
//         // On efface la liste des recettes
//         searchResultList.classList.add("thumbnails__card--hidden")
//     }
//     if (searchedString.length >= 3 && searchResults.length < 1) {
//         const errorSearchMessage = document.createElement('div')

//         main.appendChild(errorSearchMessage)
//         errorSearchMessage.classList.add('error-message')
//         errorSearchMessage.innerHTML = "désoléééééé"
//     }


//     // A partir de 3 lettres dans le champ de recherche, si la liste des recettes comporte les 3 lettres
//     if (searchedString.length >= 3 && recipesList.innerHTML.includes(searchedString)) {
//         // On fait reapparitre la liste des recettes
//         searchResultList.classList.remove("thumbnails__card--hidden")
//         console.log('on est ds les conditions')
//         // On boucle sur la liste des recettes
//         for (let i = 0; i < searchResults.length; i++) {
//             const searchResultItem = searchResults[i];
//             // On fait disparaitre toutes les recettes
//             searchResultItem.classList.add("thumbnails__card--hidden")
//             // Si une des recettes comporte la chaine de charactere renseignée dans le champ de recherche
//             if (searchResultItem.innerHTML.toLowerCase().includes(searchedString)) {
//                 // on fait reapparaitre cette recette
                
//                 searchResultItem.classList.remove("thumbnails__card--hidden")
//             }
//             console.log("on boucle on trouve")
//             const visibleRecipes = document.querySelector(".thumbnails__card:not(.thumbnails__card--hidden)")

//             if(visibleRecipes.length > 0) {
//                 // des recettes sont visibles, cacher le messsage d'erreur
//                 errorSearchMessage.classList.add('error-message--hidden')
//                 console.log(" des cartes ne sont pas cachees on cache le message d erreur")
//             } else {
//                 // aucune recette visible, afficher le message d'erreur

//                 errorSearchMessage.classList.remove('error-message--hidden')
//                 console.log(errorSearchMessage)
//                 console.log("on affiche le message car toutes les cartes sont cachees")
//             }
//                 }

//     }

    
// })



 // tentative pour le message d erreur, je prefererais un autre if avec l inverse de includes>>>

    //  else {
    //     const errorSearchMessage = document.createElement('div')

    //     main.appendChild(errorSearchMessage)
    //     errorSearchMessage.classList.add('error-message')
    //     errorSearchMessage.innerHTML = "désoléééééé"
    //         }

    //         if (searchedString.length <= 3) {
    //             main.removeChild(errorSearchMessage)
    //         }
}