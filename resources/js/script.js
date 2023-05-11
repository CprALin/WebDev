let title = document.title;

window.addEventListener('blur', () => {
    document.title = 'Come back :(';
})

window.addEventListener('focus', () => {
    document.title = title;
})

var url = window.location.href;

var links = document.querySelectorAll('.nav-menu a');


for (var i = 0; i < links.length; i++) {
  if (links[i].href === url) {
    
    links[i].classList.add('active');
  }
}

const hmb = document.querySelector(".hmb");
const navMenu = document.querySelector(".nav-menu");

hmb.addEventListener("click", () => {
   hmb.classList.toggle("active");
   navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hmb.classList.remove("active");
    navMenu.classList.remove("active");
}));