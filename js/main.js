// toggle background active 
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide =>{
        slide.classList.remove('active');
        if (slide.classList.contains(name)){
            slide.classList.add('active');
        }
    });
};

