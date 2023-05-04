const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.logInBtn');
const icon = document.querySelector('.icon-close');
let title = document.title

window.addEventListener('blur', () => {
     document.title = 'Come Back :(';
});

window.addEventListener('focus', () => {
    document.title = title;
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btn.addEventListener('click', () => {
    wrapper.classList.add('activeBtn');
});

icon.addEventListener('click', () => {
   wrapper.classList.remove('activeBtn');
});

