function menutoggle() {
    const menu = document.getElementById("menu");
    menu.classList.toggle('show');
};

function home() {
    const home = document.querySelector('.home');
    home.scrollIntoView({ behavior: 'smooth' });
    menutoggle();
};
function about() {
    const about = document.querySelector('.about');
    about.scrollIntoView({ behavior: 'smooth' });  
    menutoggle();  
};
function galleries() {
    const galleries = document.querySelector('.galleries');
    galleries.scrollIntoView({ behavior: 'smooth' });
    menutoggle();
};
function contact() {
    const contact = document.querySelector('.contact');
    contact.scrollIntoView({ behavior: 'smooth' });
    menutoggle();
};

