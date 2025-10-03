const contactBtn = document.querySelector(".w-btn");
const cvBtn = document.querySelector(".b-btn");

contactBtn.addEventListener("click", () =>{
    document.querySelector("#contact").scrollIntoView();
});

cvBtn.addEventListener("click", ()=> {
    window.open("co", "_blank");
})