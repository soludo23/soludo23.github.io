/* ====================================
   MOBILE MENU
==================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ====================================
   CLOSE MENU ON LINK CLICK
==================================== */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ====================================
   ACTIVE NAVIGATION
==================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active-link");

        }

    });

});

/* ====================================
   TESTIMONIAL SLIDER
==================================== */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    testimonials[index]
    .classList.add("active");

}

function nextTestimonial(){

    testimonialIndex++;

    if(
        testimonialIndex >=
        testimonials.length
    ){
        testimonialIndex = 0;
    }

    showTestimonial(
        testimonialIndex
    );

}

if(testimonials.length > 0){

    showTestimonial(0);

    setInterval(
        nextTestimonial,
        5000
    );

}

/* ====================================
   COUNTER ANIMATION
==================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                    target;

                }

            };

            updateCounter();

            counterObserver
            .unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ====================================
   SCROLL REVEAL
==================================== */

const revealElements =
document.querySelectorAll(

".glass-card,\
.project-card,\
.skill-card,\
.timeline-content,\
.stat-card,\
.contact-card"

);

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

/* ====================================
   BACK TO TOP BUTTON
==================================== */

const backToTop =
document.getElementById(
    "backToTop"
);

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 400){

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    }else{

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});

backToTop.addEventListener(
"click",
() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ====================================
   NAVBAR SCROLL EFFECT
==================================== */

const header =
document.querySelector(".header");

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(7,11,23,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.2)";

    }else{

        header.style.background =
        "rgba(7,11,23,.80)";

        header.style.boxShadow =
        "none";

    }

});

/* ====================================
   SMOOTH ANCHOR SCROLLING
==================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ====================================
   TYPEWRITER HERO EFFECT
==================================== */

const heroTitle =
document.querySelector(
".hero-content h2"
);

const texts = [

"Full Stack Developer",
"Laravel Developer",
"Flutter Developer",
"JavaScript Developer"

];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(!heroTitle) return;

    if(
        charIndex <
        texts[textIndex].length
    ){

        heroTitle.textContent +=
        texts[textIndex]
        .charAt(charIndex);

        charIndex++;

        setTimeout(
            typeEffect,
            100
        );

    }else{

        setTimeout(
            eraseEffect,
            2000
        );

    }

}

function eraseEffect(){

    if(
        charIndex > 0
    ){

        heroTitle.textContent =
        texts[textIndex]
        .substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(
            eraseEffect,
            50
        );

    }else{

        textIndex++;

        if(
            textIndex >=
            texts.length
        ){

            textIndex = 0;

        }

        setTimeout(
            typeEffect,
            300
        );

    }

}

if(heroTitle){

    heroTitle.textContent = "";

    typeEffect();

}