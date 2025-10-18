document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector(".w-btn");
    const cvBtn = document.querySelector(".b-btn");

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');

    const langBtn = document.getElementById("langBtn");
    let currentLang = "en";

    const themeBtn = document.getElementById("themeBtn");
    const logoImg = document.getElementById("logoImg");
    const cssL = document.getElementById("cssL");
    const htmlL = document.getElementById("htmlL");
    const jsL = document.getElementById("jsL");
    const reactL = document.getElementById("reactL");

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    contactBtn.addEventListener("click", () =>{
        document.querySelector("#contact").scrollIntoView();
    });

    cvBtn.addEventListener("click", ()=> {
        window.open("", "_blank");
    })

    langBtn.addEventListener("click", () => {
        const elements = document.querySelectorAll("[data-es]");

        elements.forEach(el => {
            // Guarda el texto original (en inglés) solo una vez
            if (!el.getAttribute("data-en")) {
            el.setAttribute("data-en", el.innerHTML);
            }

            // Cambia el idioma
            if (currentLang === "en") {
            el.innerHTML = el.getAttribute("data-es");
            } else {
            el.innerHTML = el.getAttribute("data-en");
            }
        });

        // Alterna el idioma actual
        currentLang = currentLang === "en" ? "es" : "en";
    });
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "🌞";
            localStorage.setItem("theme", "light");

            logoImg.src = "./components/assets/logo-b.png";

            cssL.src = "./components/assets/css-logo-w.png";
            reactL.src = "./components/assets/react-icon-w.png";
            htmlL.src = "./components/assets/html-icon-w.png";
            jsL.src = "./components/assets/js-logo-w.png";
        } else {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "dark");

            logoImg.src = "./components/assets/logo-w.png";
            
            cssL.src = "./components/assets/css-logo.png";
            reactL.src = "./components/assets/react-icon.png";
            htmlL.src = "./components/assets/html-icon.png";
            jsL.src = "./components/assets/js-logo.png";
        }
    });

    window.addEventListener("DOMContentLoaded", () => {
        const saved = localStorage.getItem("theme");
        
        if (!saved || saved === "dark") {
            document.body.classList.remove("light-mode"); // modo oscuro
            themeBtn.textContent = "🌙";

            logoImg.src = "./components/assets/logo-w.png";
            cssL.src = "./components/assets/css-logo.png";
            reactL.src = "./components/assets/react-icon.png";
            htmlL.src = "./components/assets/html-icon.png";
            jsL.src = "./components/assets/js-logo.png";

            localStorage.setItem("theme", "dark"); // opcional
        } else {
            document.body.classList.add("light-mode"); // modo claro
            themeBtn.textContent = "🌞";

            logoImg.src = "./components/assets/logo-b.png";
            cssL.src = "./components/assets/css-logo-w.png";
            reactL.src = "./components/assets/react-icon-w.png";
            htmlL.src = "./components/assets/html-icon-w.png";
            jsL.src = "./components/assets/js-logo-w.png";
        }
    });
})