export const onclickIngredientDropDown = () => {
    const dropdowns = document.querySelectorAll('.dropdown')

    window.addEventListener('click', (e) => {

        console.log('hello')

    })

    dropdowns.forEach(dropdown => {

        const list = dropdown.querySelector('.dropdown__list')
        const btnPlaceholder = dropdown.querySelector('.btn-placeholder')
        const searchBar = document.querySelector('.dropdown input')
        const reverseArrow = dropdown.querySelector('.arrow__reverse')
        const arrow = dropdown.querySelector('.arrow')
        // const listItem = dropdown.querySelector('.dropdown__list li')


        dropdown.addEventListener('click', (e) => {
            // e.stopPropagation();
            const dropdownPopIn = () => {
                btnPlaceholder.classList.add('popOut')
                arrow.classList.add('arrow__reverse')
                list.classList.add('popIn')
            }

            const dropdownPopOut = () => {
                btnPlaceholder.classList.remove('popOut')
                list.classList.remove('popIn')
                arrow.classList.remove('arrow__reverse')
            }


            if (arrow.classList.contains('arrow__reverse') && e.target === arrow) {
                dropdownPopOut()
                console.log('dropdownPopOut')

                //A modifier en priorité
            } else if (e.target !== reverseArrow) {
                dropdownPopIn()
                console.log('dropdownPopIn')

            }

        })

    })
}


export const ingredientListHandler = (DATA) => {
    const lis = document.querySelectorAll(".dropdown__ingredient li")
    const allRecipesCards = document.querySelectorAll('.thumbnails__card')
    
    lis.forEach(li => {
        li.addEventListener("click", () => {
            const clickedIngredient = li.innerHTML.toLowerCase()          
            
            // on rajoute la classe selected dans le bloc list des ingredients
            li.classList.add('selected-ingredient')
      
            DATA.forEach(recipe => {
                //Rechercher dans le tableau des ingredients pour chaque recette
                

                recipe.ingredients.forEach(ingredient => {
                                    
                    if (ingredient.ingredient.toLowerCase() == clickedIngredient) {
                        
                        for (let i = 0; i < allRecipesCards.length; i += 1) {
                            // On efface toutes les recettes du DOM
                            allRecipesCards[i].style.display = "none";
                            const filteredCard = allRecipesCards[i];
                            if(filteredCard.innerHTML.toLowerCase().includes(clickedIngredient))
                            filteredCard.style.display = "block"                           
                        }
                       
                        // console.log(recipe)
                        
                        }   
                        
                 })
                
            })
        })
    })
}



