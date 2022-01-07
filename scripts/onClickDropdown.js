const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {


    const list = dropdown.querySelector('.dropdown__list')
    const btnPlaceholder = dropdown.querySelector('.btn-placeholder')
    const searchBar = document.querySelector('.dropdown input')
    const reverseArrow = dropdown.querySelector('.arrow__reverse')
    const arrow = dropdown.querySelector('.arrow')
    // const listItem = dropdown.querySelector('.dropdown__list li')


    dropdown.addEventListener('click', (e) => {

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

        } else if (e.target !== reverseArrow) {
            dropdownPopIn()
            console.log('dropdownPopIn')

        }

        //  else if (e.target === listItem) {

        //     console.log('item de la liste', e.target)

        // }

    })


})












// const createList = (recipe) => {

//     let ingredientsList = ''
//     recipe.ingredients.forEach(ingredient => {
//         ingredientsList += `<li>${ingredient}</li>`
//     });
   
//     const list = `<ul>${ingredientsList}</ul>`
//     console.log(recipes.ingredients)
//     return list
// }



//         const recipes = reponse.recipes
//         const blocList = document.querySelector('.dropdown__list ul')
//         for (let i = 0; i < recipes.ingredients.length; i++) {
//             const list = createList(recipes.ingredients[i])
//             blocList.innerHTML += list
//         }



     