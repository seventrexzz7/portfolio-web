document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector(".w-btn");
    const cvBtn = document.querySelector(".b-btn");

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    contactBtn.addEventListener("click", () =>{
        document.querySelector("#contact").scrollIntoView();
    });

    cvBtn.addEventListener("click", ()=> {
        window.open("", "_blank");
    })
})