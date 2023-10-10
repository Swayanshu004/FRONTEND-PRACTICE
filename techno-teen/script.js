const crs = document.querySelector("#cursor");
const main = document.querySelector("body");
main.addEventListener("mousemove",(data)=>{
    // console.log(data);
    crs.style.left = data.x+"px" ;
    crs.style.top = data.y+"px" ;

})


gsap.to(".strip-l",{
    x: -300,
    duration:.3,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"0% 90%",
        end:"500% 0%",
        // markers: true,
        scrub:5
    }
})                                                 
gsap.to(".strip-r",{
    x: 300,
    duration:.3,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        // markers: true,
        scrub:5
    }
})                                                 