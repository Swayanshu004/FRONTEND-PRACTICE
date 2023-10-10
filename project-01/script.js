gsap.to(".strip-l",{
    x: -300,
    duration:.3,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"0% 95%",
        end:"500% 0%",
        // markers: true,
        scrub:1
    }
})                                                 
gsap.to(".strip-r",{
    x: 300,
    duration:.3,
    scrollTrigger:{
        trigger:".strip",
        scroller:"body",
        start:"top 95%",
        end:"top 0%",
        // markers: true,
        scrub:1
    }
})                                                 