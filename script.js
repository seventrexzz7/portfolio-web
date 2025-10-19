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
    const linkL = document.getElementById("linkL");
    const nstlL = document.getElementById("nstlL");
    const careerL = document.getElementById("careerL");


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

    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add("light-mode");

            logoImg.src = "./components/assets/logo-b.png";
            cssL.src = "./components/assets/css-logo-w.png";
            reactL.src = "./components/assets/react-icon-w.png";
            htmlL.src = "./components/assets/html-icon-w.png";
            jsL.src = "./components/assets/js-logo-w.png";
            linkL.src = "./components/assets/arrow-icon-w.png";
            nstlL.src = "./components/assets/nstl-logo-w.png";

            document.querySelectorAll(".careerL").forEach(img => {
                img.src = "./components/assets/career-icon-w.png";
            });

            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-mode");

            logoImg.src = "./components/assets/logo-w.png";
            cssL.src = "./components/assets/css-logo.png";
            reactL.src = "./components/assets/react-icon.png";
            htmlL.src = "./components/assets/html-icon.png";
            jsL.src = "./components/assets/js-logo.png";
            linkL.src = "./components/assets/arrow-icon.png";
            nstlL.src = "./components/assets/nstl-logo.png";

            document.querySelectorAll(".careerL").forEach(img => {
                img.src = "./components/assets/career-icon.png";
            });

            localStorage.setItem("theme", "dark");
        }
    }

    themeToggle.addEventListener("change", () => {
        applyTheme(themeToggle.checked);
    });

    window.addEventListener("DOMContentLoaded", () => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            themeToggle.checked = true;
            applyTheme(true);
        } else {
            themeToggle.checked = false;
            applyTheme(false);
        }
    });
})