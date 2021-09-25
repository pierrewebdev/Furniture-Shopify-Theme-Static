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

    nextSlide(){
        let parent = this.carousel;
        let activeSlide = parent.querySelector('.slide.translate-x-0');
        let nextSlide = activeSlide.nextElementSibling;

        if(nextSlide !== null && nextSlide.classList.contains("slide")){
            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('-translate-x-full');
            
            nextSlide.classList.remove('translate-x-full');
            nextSlide.classList.add('translate-x-0');
        }
    }

    previousSlide(){
        let parent = this.carousel;
        let activeSlide = parent.querySelector('.slide.translate-x-0');
        let previousSlide = activeSlide.previousElementSibling;

        if(previousSlide !== null && previousSlide.classList.contains("slide")){
            activeSlide.classList.remove('translate-x-0');
            activeSlide.classList.add('translate-x-full');
            
            previousSlide.classList.remove('-translate-x-full');
            previousSlide.classList.add('translate-x-0');
        }

        //need to write a check to make sure there is a slide before this one
    }

    setEventListerners(){
        let parent = this.carousel;
        let prevBtn = this.carousel.querySelector(".prev");
        prevBtn.addEventListener("click",() => {
            this.previousSlide()
        });

        let nextBtn = this.carousel.querySelector(".next");
        nextBtn.addEventListener("click",() => {
            this.nextSlide()
        });

    }
}

const carouselContainer = document.querySelector(".carousel-parent");
const carousel = new Carousel(carouselContainer);
carousel.setEventListerners();
carousel.moveBetweenSlides();