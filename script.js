gsap.from(" #nav #box01,#top-banner #banner01 ", {
    y:-500,
    delay:1,
    
    
})

gsap.from(" #food-box-start #food-box01 ",{
    x:-600,
    delay:.2,
    scrollTrigger:{
        trigger:"#food-box-start #food-box01 ",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2
       
    }
})
gsap.from(" #food-box-start #food-box02 ",{
    x:600,
    delay:.2,
    scrollTrigger:{
        trigger:"#food-box-start #food-box02 ",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2
       
    }
})
gsap.from(" #text01 #text02 ",{
    x:600,
    delay:1,
   
        scrub:5
       
 
})