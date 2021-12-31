const dropdowns = document.querySelectorAll('.dropdown')
const dropdownBlocks = document.querySelectorAll('.dropdown-container')

dropdowns.forEach(dropdown => {

    const arrow = dropdown.querySelector('.arrow')
    const list = dropdown.querySelector('.dropdown__list')
    const btnPlaceholder = dropdown.querySelector('.btn-placeholder')
   

    dropdown.addEventListener('click', () => {

        btnPlaceholder.style.display = 'none'
        arrow.classList.add('reverse')
        list.classList.add('popIn')

        console.log('coucou');

    })

// dropdownBlocks.forEach(dropdownBlock => {

//     const arrow = dropdownBlock.querySelector('.arrow')
//     const list = dropdownBlock.querySelector('.list')
//     const btnPlaceholder = dropdownBlock.querySelector('.btn-placeholder')

//     dropdownBlock.addEventListener('click', (event) => {
//         if(event.target !== dropdownBlocks ) {

//             btnPlaceholder.style.display = 'block'
//             arrow.classList.remove('reverse')
//             list.classList.remove('popIn')
//             console.log('fuuuuck', event);
//         }

//     })
// })


  
})







// const dropdownBlocks = document.querySelectorAll('.dropdown-container')

// dropdownBlocks.forEach(dropdownBlock => {
//     dropdownBlock.addEventListener('click', (event) => {
//         if(event.target !== dropdownBlocks) {

//             btnPlaceholder.style.display = 'block'
//             arrow.classList.remove('reverse')
//             list.classList.remove('popIn')
//             console.log('fuuuuck', event);
//         }

//     })
// })