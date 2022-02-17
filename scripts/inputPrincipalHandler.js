import { displayFilteredDropdownIngredient } from "./ingredientDropdownHandler.js";
import { displayFilteredDropdownUstensils } from "./ustensilsDropdownHandler.js";
import { displayFilteredDropdownAppliance } from "./appliancesDropdownHandler.js";

export const inputPrincipal = (DATA) => {
    const searchInput = document.querySelector("#search-bar-Field");

    searchInput.addEventListener('input', (e) => {
        const searchedString = e.target.value.toLowerCase();
        const allRecipesThumbs = document.querySelectorAll(".thumbnails__card");
        const recipesList = document.querySelector(".thumbnails-list");
        const errorSearchMessage = document.querySelector('.error-message');
        const splittedSearchString = searchedString.split(' ');
        const recipesTextContent = recipesList.innerHTML.toLowerCase();

        splittedSearchString.forEach(searchedWord => {
            // A partir de 3 lettres dans le champ de recherche, si la liste des recettes comporte les 3 lettres
            if (searchedString.length > 2  && recipesTextContent.includes(searchedWord)) {
                // on efface toutes les recettes
                DATA.forEach(recipe => {
                    recipe.display = false
                });

                errorSearchMessage.classList.replace('error-message--displayed', 'error-message--hidden');
                // on cache toute la liste
                recipesList.classList.add("thumbnails__card--hidden");
                // On boucle sur la liste des recettes
                allRecipesThumbs.forEach(recipesListItem => {
                    // on cache toutes les cartes de la liste de recettes
                    recipesListItem.classList.add("thumbnails__card--hidden");
                    // on fait reapparaitre la liste de recettes
                    recipesList.classList.remove("thumbnails__card--hidden");

                    // Si une des recettes comporte la ou les chaines de characteres renseignées dans le champ de recherche
                    if (recipesListItem.innerHTML.toLowerCase().includes(searchedString.split())) {
                        const id = recipesListItem.id.replace('iid-', '');

                        const recipe = DATA.findIndex((oneRecipe) => oneRecipe.id.toString() === id);

                        DATA[recipe].display = true

                        // on fait reapparaitre cette recette   
                        recipesListItem.classList.remove("thumbnails__card--hidden");
                    }
                })

            } else {

                // on cache tout le monde
                recipesList.classList.add("thumbnails__card--hidden");

                // on affiche le message d'erreur
                errorSearchMessage.classList.replace('error-message--hidden', 'error-message--displayed');

                if (searchedString.length < 3) {
                    // On boucle sur la liste des recettes
                    allRecipesThumbs.forEach(recipesListItem => {
                        // on fait reapparaitre toutes les cartes de la liste de recettes
                        recipesListItem.classList.remove("thumbnails__card--hidden");
                        // on fait reapparaitre la liste de recettes
                        recipesList.classList.remove("thumbnails__card--hidden");
                        // on cache le message d' erreur
                        errorSearchMessage.classList.replace('error-message--displayed', 'error-message--hidden');
                    })
                }
            }

        })
        displayFilteredDropdownIngredient(DATA);
        displayFilteredDropdownUstensils(DATA);
        displayFilteredDropdownAppliance(DATA);
    })
}