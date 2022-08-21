$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slide-dots',
        dotsClass:'dots'
    });

    let burger=document.querySelector('.burger');
    let cross=document.querySelector('.cross');
    let mobileNav=document.querySelector('.mobile-nav');

    burger.addEventListener('click',function(){
        mobileNav.classList.add('open');
    });

    cross.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });

  });