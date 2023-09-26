// navbar dissapear
let refTop = 0;
let nav = document.getElementById("main");
window.addEventListener("scroll",()=>{
    let currentTop = window.scrollY;
    if(refTop < currentTop){
        nav.style.top="-80px";
    }else{
        nav.style.top = "0px"
    }
    refTop = currentTop;
});