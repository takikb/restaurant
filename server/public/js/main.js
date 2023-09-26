let slideIndex = 0;
let pics = document.querySelectorAll(".first-ul li");
let circles = document.querySelectorAll(".slider-stat li");
showSlides();
function manipulateImg(){
    for(let i=0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    if(slideIndex < 1 || slideIndex > pics.length){
        slideIndex = 1;
    }
    for(let i =0; i<circles.length;i++){
        circles[i].className = circles[i].className.replace(" active", "");
    }
    pics[slideIndex-1].style.display = "block";
    circles[slideIndex-1].className+= " active";
}
function forPrev(){
    if(slideIndex==1){
        slideIndex = pics.length+1; 
    }
    slideIndex--;
    manipulateImg();
    
}
function forNext(){
    slideIndex++;
    manipulateImg();
    
}
function showSlides() {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    prevBtn.addEventListener("click",forPrev);
    nextBtn.addEventListener("click",forNext);
    for(let i=0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > pics.length){
        slideIndex = 1;
    }
    for(let i =0; i<circles.length;i++){
        circles[i].className = circles[i].className.replace(" active", "");
    }
    pics[slideIndex-1].style.display = "block";
    circles[slideIndex-1].className+= " active";
    setTimeout(showSlides,4000);
}


