const navBtn=document.querySelector('.nav__btn')
const mobileNav=document.querySelector('.mobile-nav')
let navOpen = false;
navBtn.addEventListener('click',()=>{
    if(navOpen){
        navBtn.classList.remove("nav__btn--open")
        mobileNav.classList.remove("mobile-nav--open")

        navOpen = false
    }
    else{
        navBtn.classList.add("nav__btn--open")
        mobileNav.classList.add("mobile-nav--open")

        navOpen = true
    }
})