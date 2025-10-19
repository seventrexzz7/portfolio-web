document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector(".w-btn");
    const cvBtn = document.querySelector(".b-btn");

    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.n-link');
    const nCont = document.querySelector('.n-cont');
    const menuLinks = document.querySelectorAll('.n-link a');

    const langBtn = document.getElementById("langBtn");
    let currentLang = "en";

    const themeBtn = document.getElementById("themeBtn");
    const cssL = document.getElementById("cssL");
    const htmlL = document.getElementById("htmlL");
    const jsL = document.getElementById("jsL");
    const reactL = document.getElementById("reactL");
    const linkL = document.getElementById("linkL");
    const nstlL = document.getElementById("nstlL");
    const gitL = document.getElementById("gitL");
    const linkedinL = document.getElementById("linkedinL");
    const translateL = document.getElementById("translateL");


    const header = document.getElementById('mainHeader');
    const hero = document.getElementById('hero');
    const tab = document.getElementById('nav-tab');

    let isCollapsed = false;

    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 50 && !isCollapsed) {
            header.classList.add('collapsed');
            isCollapsed = true;
        }

        if ((currentScroll < lastScrollY || currentScroll <= 0) && isCollapsed) {
            header.classList.remove('collapsed');
            isCollapsed = false;
        }

        lastScrollY = currentScroll;

        if (isCollapsed) {
            tab.style.display = 'flex';
        } else {
            tab.style.display = 'none';
        }
    });

    tab.addEventListener('click', () => {
        header.classList.remove('collapsed');
        isCollapsed = false;
        tab.style.display = 'none';
    });

    function ajustarMenu() {
        const headerHeight = document.getElementById('mainHeader').offsetHeight;
        navLinks.style.top = `${headerHeight}px`;
        navLinks.style.height = `${window.innerHeight - headerHeight}px`;
    }

    // Abrir/cerrar menú
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('open');  // animación hamburguesa
        ajustarMenu();
    });

    // Ajustar al redimensionar la ventana
    window.addEventListener('resize', () => {
         if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        toggle.classList.remove('open');

        // Limpiar los estilos inline aplicados por JS
        navLinks.style.top = '';
        navLinks.style.height = '';
        }else if (navLinks.classList.contains('active')) {
            ajustarMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú
            navLinks.classList.remove('active');
            toggle.classList.remove('open');
        });
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
            if (!el.getAttribute("data-en")) {
            el.setAttribute("data-en", el.innerHTML);
            }


            if (currentLang === "en") {
            el.innerHTML = el.getAttribute("data-es");
            } else {
            el.innerHTML = el.getAttribute("data-en");
            }
        });

        currentLang = currentLang === "en" ? "es" : "en";
    });

    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add("light-mode");

            cssL.src = "./components/assets/css-logo-w.png";
            reactL.src = "./components/assets/react-icon-w.png";
            htmlL.src = "./components/assets/html-icon-w.png";
            jsL.src = "./components/assets/js-logo-w.png";
            linkL.src = "./components/assets/arrow-icon-w.png";
            nstlL.src = "./components/assets/nstl-logo-w.png";
            linkedinL.src = "./components/assets/linkedin-icon-w.png";
            gitL.src = "./components/assets/git-logo-w.png";
            translateL.src = "./components/assets/translate-icon.png";

            document.querySelectorAll(".careerL").forEach(img => {
                img.src = "./components/assets/career-icon-w.png";
            });
            document.querySelectorAll(".logoImg").forEach(img => {
                img.src = "./components/assets/logo-b.png";
            });

            localStorage.setItem("theme", "light");

        } else {
            document.body.classList.remove("light-mode");

            cssL.src = "./components/assets/css-logo.png";
            reactL.src = "./components/assets/react-icon.png";
            htmlL.src = "./components/assets/html-icon.png";
            jsL.src = "./components/assets/js-logo.png";
            linkL.src = "./components/assets/arrow-icon.png";
            nstlL.src = "./components/assets/nstl-logo.png";
            linkedinL.src = "./components/assets/linkedin-icon.png";
            gitL.src = "./components/assets/git-logo.png";
            translateL.src = "./components/assets/translate-icon-b.png";

            document.querySelectorAll(".careerL").forEach(img => {
                img.src = "./components/assets/career-icon.png";
            });
            document.querySelectorAll(".logoImg").forEach(img => {
                img.src = "./components/assets/logo-w.png";
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