var tl = gsap.timeline()

tl.from("#nav img , #nav #mid , #nav #right",{
    y: -100,
    duration: .5,
    stagger: .3,
})
tl.from("#hero h1",{
    x: -1200,
    duration:.4,
    stagger:.2
})
tl.from("#img",{
    x: 1200,
    duration:.5
})

gsap.from("#box1 , #box2 , #box3",{
    scale: 0,
    duration: .5,
    scrollTrigger:{
        trigger: "#box1 , #box2 , #box3",
        scroller:"body",
        // markers: true,
        start:"top 90%",
        end: "top 65%",
        scrub:1
    }
})
gsap.from("#box1 h3, #box2 h3, #box3 h3",{
    x: -300,
    duration: .5,
    scrollTrigger:{
        trigger: "#box1 h3, #box2 h3 , #box3 h3",
        scroller:"body",
        // markers: true,
        start:"top 65%",
        end: "top 68%",
        scrub:1
    }
})