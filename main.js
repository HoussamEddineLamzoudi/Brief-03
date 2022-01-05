
// const navSlide = () => {
//     const burger = document.querySelector('.menu_resp');
//     const nav = document.querySelector('.nav_links');

//     burger.addEventListener('click', () => {
//     nav.classList.toggle('nav_active');
//     });
// }

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




const debu = document.querySelector("#debu")
const fin = document.querySelector("#fin")


const btn = document.querySelector(".btn_res")



btn.addEventListener("click", (e) => {
    const duree = (fin.valueAsDate - debu.valueAsDate)/86400000;

    const link = document.createElement("a")
    link.href= `/reservation.html?duration=${duree}`
    link.style.display = "none"
    document.body.appendChild(link)

    link.click();
    
})
