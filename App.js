//AOS ANIMATION
AOS.init(
    { duration: "1200", once: "true" }
);
//PURE COUNTER ANIMATION
new PureCounter({
    selector: ".purecounter",
    duration: 0.5,
    once: true,
});

//HAMBURGER MENU
const lines = document.querySelectorAll(".line")
const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('nav')
const rootCss = document.querySelector(':root')
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('slide_navbar')
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle(`line${i}`)
    }
    function linkAction() {
        const links = document.querySelectorAll(".link")
        links.forEach(e => {
            e.addEventListener('click', () => {
                navBar.classList.remove("slide_navbar")
                for (let i = 0; i < lines.length; i++) {
                    lines[i].classList.remove(`line${i}`)
                }
            })
        })
    }
    linkAction()

})

//COPYRIGHT YEAR
const copyrightYear = document.querySelector(".year")
const date = new Date()
let year = date.getFullYear()
copyrightYear.innerHTML = year
//PRELOADER
const loader = document.querySelector(".loader")
window.addEventListener("load", (e) => {
    loader.style.display = "none"
    loader.remove()
})
//Heading Animation
const texts = ["Frontend Web Developer", "Freelancer",]
let count = 0
let index = 0
let currentText = ""
let letter = ""
function changeHeading() {
    if (count === texts.length) {
        count = 0
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
    const heading = document.querySelector('.heading')
    heading.textContent = letter
    if (letter.length === currentText.length) {
        count++;
        index = 0
    }
    setTimeout(changeHeading, 400);
}
changeHeading()

//Scroll Animation for Skill progress bar
const skillbars = document.querySelectorAll(".circle_anime")
const sectionAbout = document.querySelector(".about_skills")
const skillCircle = document.querySelectorAll('.skill_progress')
const skillOptions = {
    rootMargin: "0px",
    threshold: 0.25,
}
const skillObserver = new IntersectionObserver((entries, skillObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < skillbars.length; i++) {
                if (skillbars[i].classList.contains(`circle0${i}`)) {
                    skillbars[i].classList.add(`skill_progress_animate${i}`)
                }
            }
        }
    })
}, skillOptions)
skillCircle.forEach(circle => {
    skillObserver.observe(circle)
})

//NAVIGATION MENU ACTIVE LINKS
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        let sectionId = section.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector('.links a[href*=' + sectionId + ']')
            link.classList.add('active_link')
            link.children[0].classList.add("active_linkIcon")
        } else {
            const link = document.querySelector('.links a[href*=' + sectionId + ']')
            link.classList.remove('active_link')
            link.children[0].classList.remove("active_linkIcon")
        }
    })
}
window.addEventListener('scroll', scrollActive)

//FILTER PRODUCTS

const allBtn = document.querySelector(".allBtn")
const webBtn = document.querySelector(".webBtn")
const pageBtn = document.querySelector(".pageBtn")
const appBtn = document.querySelector(".appBtn")
const allData = document.querySelectorAll(".project")
const btns = document.querySelectorAll(".btn")
function filterProduct() {
    allData.forEach(data => {
        btns[0].addEventListener('click', () => {
            data.style.display = "block"
            btns[0].classList.add('active_linkIcon')
            btns[1].classList.remove('active_linkIcon')
            btns[2].classList.remove('active_linkIcon')
            btns[3].classList.remove('active_linkIcon')
        })
        //website filter
        btns[1].addEventListener("click", () => {
            if (!data.classList.contains('filter-website')) {
                data.style.display = "none"
                btns[0].classList.remove('active_linkIcon')
                btns[1].classList.add('active_linkIcon')
                btns[2].classList.remove('active_linkIcon')
                btns[3].classList.remove('active_linkIcon')

            }
            else {
                data.style.display = "inline-block"
            }
        })
        //Landing Page filter
        btns[2].addEventListener("click", () => {
            if (!data.classList.contains('filter-page')) {
                data.style.display = "none"
                btns[0].classList.remove('active_linkIcon')
                btns[1].classList.remove('active_linkIcon')
                btns[2].classList.add('active_linkIcon')
                btns[3].classList.remove('active_linkIcon')

            }
            else {
                data.style.display = "inline-block"
            }
        })
        //APP filter
        btns[3].addEventListener("click", () => {
            if (!data.classList.contains('filter-app')) {
                data.style.display = "none"
                btns[0].classList.remove('active_linkIcon')
                btns[1].classList.remove('active_linkIcon')
                btns[2].classList.remove('active_linkIcon')
                btns[3].classList.add('active_linkIcon')

            }
            else {
                data.style.display = "inline-block"
            }
        })
    })
}
filterProduct()
//ACTIVE FILTER LINKS

//LOCATION ON MAP
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 33.5651, lng: 73.0169 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;
