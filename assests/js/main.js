// =========== Change Background Header ===========

function ScrollHeader() {
    const header = document.getElementById('header')
    // when  the croll is greator than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', ScrollHeader);

// =========== Service Modal ============

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalClose = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
};

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
});

//  ===============  MIXITUP FILTER  PORTFOLIO ==================
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Work

const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork));


// <============== SWIPER TESTIMONIAL ==================>

let swiperTestimonial = new Swiper('.testimonial_container', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    }
});


// <================= SCROLL SECTIONS ACTIVE LINK ==================>
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// <=========== DARK  LIGHT THEME ===============>
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We  obtain the current theme that the interface has by validating  the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx  bx-sun';

// We valide if the user previously  chose a topic

if (selectedTheme) {
    // If the validation is fulfillded we ask what the issue was to know if we activated or deactivated  the light

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[iconTheme === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Active  /  deactivate  the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the light / icon Theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    // WE save the theme and the current icon that user choose 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


//  <===================== SCROLL REVEAL ANIMATION ===================>

const sr = ScrollReveal({
    origin: 'top',
    distance: '60',
    duration: 2500,
    delay: 400,
    // reset: true,

});
sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {
    delay: 700
})
sr.reveal(`.home_social, .home_scroll`, {
    delay: 700,
    origin: 'bottom'
})
sr.reveal(`.home_handle`, {
    delay: 700
})