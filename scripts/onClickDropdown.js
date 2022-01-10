const dropdowns = document.querySelectorAll('.dropdown')


window.addEventListener('click', (e)=> {
    
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
        e.stopPropagation();
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


            // ******************************************************************

//A modifier en priorité
        } else if (e.target !== reverseArrow) {
            dropdownPopIn()
            console.log('dropdownPopIn')

        }
// A modifier

               
        //  else if (e.target === listItem) {

        //     console.log('item de la liste', e.target)

        // }

    })

         // ******************************************************************
})
