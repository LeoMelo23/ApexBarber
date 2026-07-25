const menu = document.querySelector("#menu-mobile")
const fechar = document.querySelector("#btn-close")
const btnMenu = document.querySelector("#btnMenu")
const overlay = document.querySelector("#overlay")


btnMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-0")
  menu.classList.remove("translate-x-full")
  menu.classList.add(overlay)
 
})
fechar.addEventListener("click", () => {
  menu.classList.add("translate-x-full")
  menu.classList.remove("translate-x-0")
  menu.classList.remove(overlay)
  
})

const media = window.matchMedia("(min-width: 768px)");

media.addEventListener("change", (e) => {
    if (e.matches) {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
      
    }
});

const header = document.querySelector("header");

function updateHeaderHeight(){
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
    );
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);

const revealEls = document.querySelectorAll('.reveal');

 const io = new IntersectionObserver((entries) => {
   entries.forEach(e => {
     if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target); // anima só uma vez
    }
   });
 }, { threshold: 0.15 }); // dispara quando 15% do elemento está visível

 revealEls.forEach(el => io.observe(el));