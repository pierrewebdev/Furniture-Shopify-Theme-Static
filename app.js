class Carousel{
    constructor(parentContainer){
        this.carousel = parentContainer;
    }

    moveBetweenSlides(){
        let parent = this.carousel;
        setTimeout(function(){
            let activeSlide = parent.querySelector('.slide.translate-x-0');
            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('-translate-x-full');
            
            let nextSlide = activeSlide.nextElementSibling;
            nextSlide.classList.remove('translate-x-full');
            nextSlide.classList.add('translate-x-0');
        }, 3000);
    }
}

const carouselContainer = document.querySelector(".carousel-parent");
const carousel = new Carousel(carouselContainer);
carousel.moveBetweenSlides();