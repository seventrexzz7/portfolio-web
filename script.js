document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector(".w-btn");
    const cvBtn = document.querySelector(".b-btn");

    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.n-link');
    const menuLinks = document.querySelectorAll('.n-link a');

    const langBtn = document.getElementById("langBtn");
    let currentLang = "en";

    const cssL = document.getElementById("cssL");
    const htmlL = document.getElementById("htmlL");
    const jsL = document.getElementById("jsL");
    const reactL = document.getElementById("reactL");
    const nstlL = document.getElementById("nstlL");
    const gitL = document.getElementById("gitL");
    const linkedinL = document.getElementById("linkedinL");
    const translateL = document.getElementById("translateL");
    const natL = document.getElementById("natL");
    const coffeL = document.getElementById("coffeL");


    const header = document.getElementById('mainHeader');
    const tab = document.getElementById('nav-tab');

    let isCollapsed = false;

    let lastScrollY = 0;

    // --- HEADER SCROLL EFFECT --- //

    if (header && tab) {

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
    }

    // --- HAMBURGUER MENU --- //

    if (toggle && navLinks){
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
    }

    // --- BUTTONS --- //

    if (contactBtn){
        contactBtn.addEventListener("click", () =>{
            document.querySelector("#footer").scrollIntoView();
        });
    }

    if (cvBtn){
        cvBtn.addEventListener("click", ()=> {
            window.open("", "_blank");
        })
    }

    // --- TRANSLATE --- //

    if (langBtn){
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
    }

    // --- THEME LIGHT / THEME DARK --- //

    if (themeToggle){
        function applyTheme(isLight) {
            if (isLight) {
                document.body.classList.add("light-mode");

                if (cssL) cssL.src = "components/assets/css-logo-w.png";
                if (reactL) reactL.src = "components/assets/react-icon-w.png";
                if (htmlL) htmlL.src = "components/assets/html-icon-w.png";
                if (jsL) jsL.src = "components/assets/js-logo-w.png";
                if (nstlL) nstlL.src = "components/assets/nstl-logo-w.png";
                if (linkedinL) linkedinL.src = "components/assets/linkedin-icon-w.png";
                if (gitL) gitL.src = "components/assets/git-logo-w.png";
                if (translateL) translateL.src = "components/assets/translate-icon.png";
                if (natL) natL.src = "components/assets/nataliachen-logo-w.png";
                if (coffeL) coffeL.src = "components/assets/coffee.png";

                document.querySelectorAll(".careerL").forEach(img => {
                    img.src = "components/assets/career-icon-w.png";
                });
                document.querySelectorAll(".logoImg").forEach(img => {
                    img.src = "components/assets/logo-b.png";
                });
                document.querySelectorAll(".linkL").forEach(img => {
                    img.src = "components/assets/arrow-icon-w.png";
                });

                localStorage.setItem("theme", "light");

            } else {
                document.body.classList.remove("light-mode");

                if (cssL) cssL.src = "components/assets/css-logo.png";
                if (reactL) reactL.src = "components/assets/react-icon.png";
                if (htmlL) htmlL.src = "components/assets/html-icon.png";
                if (jsL) jsL.src = "components/assets/js-logo.png";
                if (nstlL) nstlL.src = "components/assets/nstl-logo.png";
                if (linkedinL) linkedinL.src = "components/assets/linkedin-icon.png";
                if (gitL) gitL.src = "components/assets/git-logo.png";
                if (translateL) translateL.src = "components/assets/translate-icon-b.png";
                if (natL) natL.src = "components/assets/nataliachen-logo.png";
                if (coffeL) coffeL.src = "components/assets/coffee-b.png";

                document.querySelectorAll(".careerL").forEach(img => {
                    img.src = "components/assets/career-icon.png";
                });
                document.querySelectorAll(".logoImg").forEach(img => {
                    img.src = "components/assets/logo-w.png";
                });
                document.querySelectorAll(".linkL").forEach(img => {
                    img.src = "components/assets/arrow-icon.png";
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
    }
})