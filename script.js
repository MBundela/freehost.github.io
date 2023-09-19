// =====================toggle icon navbar=================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// =====================scroll section active link=================

const sections = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        const top = window.scrollY;
        const offset  = sec.offsetTop - 150;
        const hieght = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top >= offset && top < offset + hieght){
            navlink.forEach(link => {
                link.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    const header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100)


// ====================remove class==================
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

// ==============================scroll reveal======================

ScrollReveal({
    // reset:true,
    distance : '80px',
    duration :2000,
    delay : 200
});

// ScrollReveal({ reset: true });

ScrollReveal().reveal('.home-contant,.heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box img, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-contant h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-contant p,.about-content,.heading',{ origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings : ['Frontend Developer','Web Designer','Blogger','Youtuber'],
    typeSpeed :100,
    backSpeed :100,
    backDelay  :1000,
    loop: true
});

