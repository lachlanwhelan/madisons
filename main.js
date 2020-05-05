function navClick() {
    const toggleBtn = document.getElementsByClassName('navigation__toggle')[0];
    toggleBtn.addEventListener('click',  toggleNavMenu)
}

function toggleNavMenu(){
    const navMenu = document.getElementsByClassName('navigation__menu')[0];
    const toggleBtn = document.getElementsByClassName('navigation__toggle')[0];
    navMenu.classList.toggle('show');
    toggleBtn.classList.toggle('show');
}

isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const menu = document.querySelector('.menu-section');
const intro = document.querySelector('.intro')


window.onscroll = () => {

    if(window.innerWidth > 900){
        if(isInViewport(intro)){
            intro.classList.add('fadeIn')
        }else{
            intro.classList.remove('fadeIn')
        }
    
    
        if(isInViewport(menu)){
            menu.classList.add('fadeIn');
        }else{
            menu.classList.remove('fadeIn');
        }
    }
    else{
        return;
    }
}


window.onload = function(){
    const body = document.getElementsByTagName('html')[0];

    body.classList.add('fadeIn');

}




navClick();