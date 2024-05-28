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

// switch Background 
window.addEventListener('load',()=>{
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn =>{
        btn.addEventListener('click',function (e){
            e.preventDefault();
            slideBtnList.forEach(el =>{
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });

    });
});

// active sections
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section show');
        if(section.classList.contains(name)){
            section.classList.add('section show');
            header.classList.add('active');
        }

    });
};

// navigation to sections
window.addEventListener('load',()=>{
    const navList=document.querySelectorAll('.nav-btn');
    navList

});