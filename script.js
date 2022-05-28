const themeButton = document.querySelector('#themeSwitch')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const cards = document.querySelectorAll('.card-body')
const footers = document.querySelectorAll('.card-footer')
const registerCard = document.querySelector('.bg-gradient')
const table = document.querySelector('.table ')
const tableRows = table.getElementsByTagName('tr')
const h1 = document.querySelector('h1')
const div = document.querySelector('body > div:nth-child(3) > div:nth-child(1)')
const footerAlign = document.querySelector('nav.navbar:nth-child(6) > div:nth-child(1)')

const switchTheme = () => {
    const toggleCSSClasses = (el, ...cls) =>
        cls.map(cl => el.classList.toggle(cl));
    // Remove dark background from nav tag
    toggleCSSClasses(nav, 'navbar-dark', 'bg-dark')

    // Remove dark background from body tag
    toggleCSSClasses(body, 'navbar-dark', 'bg-dark')

    // Remove dark background from registration
    toggleCSSClasses(registerCard, 'bg-dark')

    // Changes 3-row view into 1-row view
    toggleCSSClasses(div, 'row')


    // Remove dark background from cards
    for (let card of cards) {
        toggleCSSClasses(card, 'bg-dark')
    }
    // Remove dark background from footers
    for (let foot of footers) {
        toggleCSSClasses(foot, 'bg-dark')
    }
    for (let tr of tableRows) {
        tr.classList.toggle('text-white')
    }


    if (body.classList.contains('bg-dark')) {
        // Changes main message
        h1.textContent = 'This is Dark Theme'
        // Changes Button text
        themeButton.textContent = 'Activate Light Theme'

        footerAlign.classList.remove('justify-content-end')


    } else {
        h1.textContent = 'This is Light Theme'
        themeButton.textContent = 'Activate Dark Theme'
        footerAlign.classList.add('justify-content-end')


    }




}
themeButton.addEventListener('toggle', switchTheme)



