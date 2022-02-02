export const inputPrincipal = () => {
    const searchInput = document.querySelector("#search-bar-Field")


    searchInput.addEventListener('input', (e) => {
        const searchedString = e.target.value.toLowerCase();
        const allRecipesThumbs = document.querySelectorAll(".thumbnails__card")
        const recipesList = document.querySelector(".thumbnails-list")
        const errorSearchMessage = document.querySelector('.error-message')
        const visibleRecipes = document.querySelectorAll(".thumbnails__card:not(.thumbnails__card.thumbnails__card--hidden)")


        // A partir de 3 lettres dans le champ de recherche, si la liste des recettes comporte les 3 lettres
        if (searchedString.length > 2 && recipesList.innerHTML.includes(searchedString)) {
            console.log('on tape + de 3 lettres et il y a un resultat')

            // on cache tout le monde
            recipesList.classList.add("thumbnails__card--hidden")
            console.log('on cache la liste')
            // On fait reapparitre la liste des recettes
            // On boucle sur la liste des recettes
            for (let i = 0; i < allRecipesThumbs.length; i++) {
                const recipesListItem = allRecipesThumbs[i];
                // on cache toutes les cartes de la liste de recettes
                recipesListItem.classList.add("thumbnails__card--hidden")
                // on fait reapparaitre la liste de recettes
                recipesList.classList.remove("thumbnails__card--hidden")

                // Si une des recettes comporte la chaine de charactere renseignée dans le champ de recherche
                if (recipesListItem.innerHTML.toLowerCase().includes(searchedString)) {
                    // on fait reapparaitre cette recette   
                    recipesListItem.classList.remove("thumbnails__card--hidden")

                }

            }

        } else {
           
                // on cache tout le monde
                recipesList.classList.add("thumbnails__card--hidden")
                console.log('on cache la liste')
                errorSearchMessage.classList.replace('error-message--hidden', 'error-message--displayed')
                console.log('on affiche le message la liste')
            if (searchedString.length < 2) {
                recipesList.classList.remove("thumbnails__card--hidden")
                errorSearchMessage.classList.replace('error-message--displayed', 'error-message--hidden')

            }

        }
    })
}