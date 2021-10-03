class Carousel{
    constructor(parentContainer){
        this.carousel = parentContainer;
    }

    // moveBetweenSlides(){
    //     let parent = this.carousel;
    //     setTimeout(function(){
    //         let activeSlide = parent.querySelector(".slide.translate-x-0.active");
    //         activeSlide.classList.remove("translate-x-0", "active");
    //         activeSlide.classList.add("-translate-x-full");
            
    //         let nextSlide = activeSlide.nextElementSibling;
    //         nextSlide.classList.remove("translate-x-full");
    //         nextSlide.classList.add("translate-x-0", "active");
    //     }, 3000);
    // }

    //I need to rework the function above to allow it to continuously switch between the two carousel slides by using setInterval and the previousSlide and nextSlide methods

    nextSlide(){
        let parent = this.carousel;
        let activeSlide = parent.querySelector(".slide.translate-x-0.active");
        let nextSlide = activeSlide.nextElementSibling;

        if(nextSlide !== null && nextSlide.classList.contains("slide")){
            activeSlide.classList.remove("translate-x-0", "active");
            activeSlide.classList.add("-translate-x-full");
            
            nextSlide.classList.remove("translate-x-full");
            nextSlide.classList.add("translate-x-0", "active");
        }

        //switch button color to represent you are now on a new slide
        this.switchActiveBtn();
    }

    previousSlide(){
        let parent = this.carousel;
        let activeSlide = parent.querySelector(".slide.translate-x-0.active");
        let previousSlide = activeSlide.previousElementSibling;

        if(previousSlide !== null && previousSlide.classList.contains("slide")){
            activeSlide.classList.remove("translate-x-0", "active");
            activeSlide.classList.add("translate-x-full");
            
            previousSlide.classList.remove("-translate-x-full");
            previousSlide.classList.add("translate-x-0", "active");
        }

        //switch button color to represent you are now on a new slide
        this.switchActiveBtn();
    }

    setActiveBtnColor(){
        let parent = this.carousel;
        let activeBtn = parent.querySelector("button.active");
        activeBtn.classList.add("bg-yellow-600", "border-yellow-600");
    }

    switchActiveBtn(){
        let parent = this.carousel;
        let activeBtn = parent.querySelector("button.active");
        let inactiveBtn = parent.querySelector("button:not(.active)");

        if(activeBtn){
            activeBtn.classList.remove("active", "bg-yellow-600", "border-yellow-600");
            inactiveBtn.classList.add("active", "bg-yellow-600", "border-yellow-600");
        }
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

        if(prevBtn.classList.contains("active") || nextBtn.classList.contains("active")){
            this.setActiveBtnColor();
        }

    }
}

const header = document.querySelector(".carousel-parent");
const latestProd = document.querySelector(".latest-carousel")
const headerCarousel = new Carousel(header);
const latestCarousel = new Carousel(latestProd);

headerCarousel.setEventListerners();
latestCarousel.setEventListerners();
// carousel.moveBetweenSlides();