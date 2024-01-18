const next=document.querySelector(".next-bt");
const pre=document.querySelector(".pre-bt");
const slides=document.querySelectorAll(".slide");
const n=slides.length;
let sn=0;
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementsByClassName("header")[0]; // Assuming there's only one element with the "header" class
  
    window.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight-100) {
            navbar.style.backgroundColor ="#228B22";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});

  
// for next button
next.onclick=()=>{
    // the netxt 3 lines is to remove the active state to display only one slide
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
    // the below lines is to navigate between the slides
    sn++;
    if(sn >(n-1))
    {
        sn=0;
    }
    slides[sn].classList.add('active');
}
// for prev button
pre.onclick=()=>{
    // the netxt 3 lines is to remove the active state to display only one slide
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
    // the below lines is to navigate between the slides
    sn--;
    console.log(sn);
    if(sn<0)
    {
        sn=n-1;
        console.log("reached");
    }
    slides[sn].classList.add('active');
}