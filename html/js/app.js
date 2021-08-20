// Add remove class input feild                    
let formControl = document.querySelectorAll('.c-form-group__control');                
        
for (let i = 0; i < formControl.length; i++) {
    formControl[i].addEventListener('focusout', function() {                                            
        if (this.value != '') {
            this.parentNode.classList.add('c-form-group--feel');
        } else {
            this.parentNode.classList.remove('c-form-group--feel');
        }                           
    });
}


// Radio button check/uncheck add/remove class           
let configParent = document.getElementById('selectConfig');
let configCard = configParent.getElementsByClassName('configuration-card');              

for (let i = 0; i < configCard.length; i++) {
    configCard[i].addEventListener('click', function() {                                            
        let current = configParent.getElementsByClassName('active');                
        current[0].className = current[0].className.replace(' active', '');                
        this.className += ' active';                
    });
}


// Popup show hide
let popup = document.querySelector('.c-popup');
let popupContent = document.querySelector('.c-popup .c-popup__content');
let updateConfigBtn = document.getElementById('updateConfig');

let showPopup = () => {
    document.body.style.overflow = 'hidden';
    popup.classList.add('c-popup--show');
}

let hidePopup = () => {
    document.body.style.overflow = null;
    popup.classList.remove('c-popup--show');
}

let eventStop = (event) => {
    event.stopPropagation();
}

updateConfigBtn.addEventListener('click', showPopup); // Show popup
popup.addEventListener('click', hidePopup); // Hide popup
popupContent.addEventListener('click', eventStop); // Popup container click stop for hide popup


// Mobile nav
const navBtn = document.querySelector('.c-header .mobo-nav-btn');
const navContainer = document.querySelector('.c-header .nav');

let mobileNav = () => {
    if (navBtn.className != 'mobo-nav-btn close-nav') {              
        document.body.style.overflow = 'hidden';
        document.querySelector('.mobo-nav-btn img').src = 'images/close.svg';
        navBtn.classList.add('close-nav');
        navContainer.classList.add('nav--show');
    } else {            
        document.body.style.overflow = null;
        document.querySelector('.mobo-nav-btn img').src = 'images/nav-icon.svg';
        navBtn.classList.remove('close-nav');
        navContainer.classList.remove('nav--show');        
    }
}

navBtn.addEventListener('click', mobileNav); // Show hide mobile nav