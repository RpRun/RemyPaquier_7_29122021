const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const arrow= dropdown.querySelector('.arrow')
        const list = dropdown.querySelector('.list')
        const btnPlaceholder = dropdown.querySelector('.btn-placeholder')

        btnPlaceholder.style.display = 'none'
        arrow.classList.add('reverse')
        list.classList.add('popIn')

        console.log('coucou');
    })
})