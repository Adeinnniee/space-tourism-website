

/* -------------------------------- GLOBAL VARIABLES ----------------------------- */
const mobile_toggle = document.querySelector('.mobile-toggle');
const navbar = document.querySelector('#navigation');





/* function to display the navbar on mobile devices*/

mobile_toggle.addEventListener('click', ()=>{
    const attribute = navbar.getAttribute('data-visible');

    if (attribute === 'false'){
        mobile_toggle.setAttribute('aria-expanded', true);
        navbar.setAttribute('data-visible', true);
    }

    else{
        mobile_toggle.setAttribute('aria-expanded', false);
        navbar.setAttribute('data-visible', false);
    }
})


