const slides = document.getElementsByTagName("article");
const rightBtn = document.querySelectorAll('.move-btns .right-btn');
const leftBtn = document.querySelectorAll('.move-btns .left-btn');
const nav = document.querySelector('nav');

let activeIndex = 0;

rightBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        mouseCaret.classList.add('caret-grow');
    })
    btn.addEventListener('mouseleave', () => {
        mouseCaret.classList.remove('caret-grow');
    })
})

leftBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        mouseCaret.classList.add('caret-grow');
    })
    btn.addEventListener('mouseleave', () => {
        mouseCaret.classList.remove('caret-grow');
    })
})


function handleRightBtn(){
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
    
}

function handleLeftBtn(){
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
}

function handleNavToggle(){
    nav.dataset.transitionable = 'true';
    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true" ;
}

window.matchMedia("(max-width: 800px)").onchange = e => {
    nav.dataset.transitionable = "false";
    nav.dataset.toggled = "false";
}