function page1Animation() {
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    stagger: 0.15,     
})

tl.from(".center-part1 h1",{
    x: -200,
    opacity: 0,
    duration:0.5,
})

tl.from(".center-part1 p",{
    x: -100,
    opacity: 0,
    duration:0.4,
})

tl.from(".center-part1 button",{
    opacity: 0,
    duration:0.4,  
})

tl.from(".center-part2 img",{
    x:100,
    opacity: 0,
    duration:0.5,
},"-=1")      //Delay under Timeline

tl.from(".section1Bottom img",{
    opacity:0,
    y: 30, 
    stagger: 0.15, 
    duration: 0.6,
    scrollTrigger:{
        trigger: ".section1Bottom img",
        scroller: "body",
        // markers:"true",
        start: "top 90%",
        end: "top 20%",
        scrub: 2,
    }
})
}

function page2Animation(){
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top -50%",
        scrub: 2,
    }
})

tl2.from(".services",{
    y: 30,
    opacity: 0,
})

tl2.from(".elem.line1.left",{
    x:-200,
    opacity:0,
    duration: 1,
},"hi")
tl2.from(".elem.line1.right",{
    x:200,
    opacity:0,
    duration: 1,
},"hi")
tl2.from(".elem.line2.left",{
    x:-200,
    opacity:0,
    duration: 1.8,
},"he")

tl2.from(".elem.line2.right",{
    x:200,
    opacity:0,
    duration: 1.8,
},"he")

// gsap.from(".services h3",{
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller: "body",
//         start: "top 50%",
//     }
// })
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section3",
            scroller: "body",
            // markers:true,
            start: "top 20%",
            end: "top -20%",
            scrub: 2,
        }
    })
    
    tl3.from(".caseStudy",{
        y: 30,
        opacity: 0,
    })
    
    tl3.from(".card.left",{
        x:-200,
        opacity:0,
        duration: 1,
    },"hello")
    
    tl3.from(".card",{
        opacity:0,
        duration: 1,
    },"hello")
    
    tl3.from(".card.right",{
        x:+200,
        opacity:0,
        duration: 1,
    },"hello")
    
}
gsap.from(".prop",{
    y: 30,
    opacity: 0,
        scrollTrigger:{
        trigger:".prop",
        scroller: "body",
        start: "top 80%",
        end:"top 40%",
        scrub: 2,           
        // markers: true 
    }
})


page1Animation();
page2Animation();
page3Animation();
