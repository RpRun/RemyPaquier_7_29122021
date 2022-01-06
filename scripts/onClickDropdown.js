const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {


    const list = dropdown.querySelector('.dropdown__list')
    const btnPlaceholder = dropdown.querySelector('.btn-placeholder')
    const searchBar = document.querySelector('.dropdown input')
    const reverseArrow = dropdown.querySelector('.arrow__reverse')
    const arrow = dropdown.querySelector('.arrow')


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


        if (arrow.classList.contains('arrow__reverse') && e.target === arrow)
         {
            dropdownPopOut()
            console.log('dropdownPopOut')
           
        } else if(e.target !== reverseArrow) {
            dropdownPopIn()
            console.log('dropdownPopIn')
            searchBar.focus
            console.log('give focus')
        }

        // } else if (e.target === btnPlaceholder) {
        //    focus(searchBar)
        //     console.log('give focus', e.target)
        //     console.log('dhumhum')
        // }

    })


})

