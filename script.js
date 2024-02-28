function navbar(){
    let navbar = document.getElementById("navbar")
    let linksContainer = document.querySelector("#nav-links ul")
    let searchContainer = document.querySelector("#nav-links .search-container")
    let span = document.querySelector(".menu span")
    let h1 = document.querySelector(".menu h1")
    let btn = document.querySelector('#btn')
    let val =0
    btn.addEventListener("click",()=>{
        if(val==0){
            
    
            linksContainer.style.display='flex'
            searchContainer.style.display='block'
            navbar.style.justifyContent="space-between"
            navbar.style.backgroundColor="black"
            span.style.color ="black"
            span.style.backgroundColor ="white"
            h1.style.color ="black"
            h1.style.backgroundColor ="white"
            val=1
        }
        else{
            linksContainer.style.display='none'
            searchContainer.style.display='none'
            navbar.style.justifyContent="flex-end"
            navbar.style.backgroundColor="transparent"
            span.style.color ="white"
            span.style.backgroundColor ="black"
            h1.style.color ="white"
            h1.style.backgroundColor ="black"
            val=0
    
        }
        
    
    
    })

}

navbar()

// gsap Animations start // 
function page1Animation(){
    let tl = gsap.timeline()
    tl.from("#page-1 h1",{
        y:-60,
        opacity:0,
        duration:1,
    })
    tl.from("#page-1 .small-head h2",{
        x:-280,
        duration:0.6,
    })
    tl.from("#page-1 .small-head button",{
        x:280,
        duration:0.6,
    })
}

page1Animation()

function page1Part2Animation(){
    gsap.to(".about .about-part-1",{
        y:-85,
        opacity:0.9,
        duration:0.1,
        scrollTrigger:{
            trigger:".about",
            scroller:"body",
            start:"top 65%",
            end:"bottom 90%",
            scrub:true
    
        }
    })
    gsap.from(".about-2",{
        x:70,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:".about-2",
            scroller:"body",
            start:"top 80%",
            end:"bottom 55%",
            scrub:true
    
        }
    })

}

page1Part2Animation()

function page2Animation(){

    gsap.from("#page-2 .box",{
        y:85,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:".box",
            scroller:"body",
            start:"top 80%",
            end:"bottom 70%",
            scrub:true
    
        }
    })

}

page2Animation()

function page3Animation(){
    gsap.from("#page-3 .pt-1",{
        x:-85,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:"#page-3 .pt-1",
            scroller:"body",
            start:"top 70%",
            end:"bottom 40%",
            scrub:true
        }
    })
    
    gsap.from("#page-3 .pt-2 .box",{
        y:85,
        opacity:0,
        duration:0.2,
        scrollTrigger:{
            trigger:"#page-3 .pt-2 .box",
            scroller:"body",
            start:"top 70%",
            end:"bottom 90%",
            markers:true,
            scrub:true
        }
    })

}

page3Animation()
// gsap Animations end //

