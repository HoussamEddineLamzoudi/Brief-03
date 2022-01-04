
const navSlide = () => {
    const burger = document.querySelector('.menu_resp');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    });
}

// navSlide();

// const navSlide = () => {
//     const nav = document.querySelector('.nav_links');

//     nav.style.transform = "translateX(0%)"
//     // nav.style.opacity = "1"
// }

// const hundleMenu =()=>{//arrow func
//     document.querySelector('.nav_links').style.transform = "translateX(0%)"
//     document.querySelector('.nav_links').style.opacity = "1"
// }

// hundleMenu();
