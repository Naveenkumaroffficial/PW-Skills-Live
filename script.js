const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


function animation() {
    gsap.from("nav h1",{
        y:30,
        duration:0.3,
        stagger:0.2,
        
    })
    gsap.to(".partners .brands",{
        x:"-100%",
        duration:16,
        repeat:-1,
        ease:"linear"
    
    }) 
    
    gsap.from(".page-1 .part-1 h1, .page-1 .part-1 p, .page-1 .part-1 button ",
        {
            x:-500,
            duration:1,
            ease:"circ.out",
            rotate:7
            

        }
    )
    gsap.from(".box-1",{
        x:500,
        duration:1,
        ease:"circ.out",
        rotate:7
        

    })
}
animation();




















// var common=document.querySelectorAll(".common");
//     var button=document.querySelectorAll(".common button");


// function ecosystem() {
    
//     common.addEventListner("mouseover",()=>{
//         button.style.opacity="1";

//     })

    
// }
// ecosystem();

// var common = document.querySelectorAll(".common");
// var buttons = document.querySelectorAll(".common button");

// function ecosystem() {
//     common.forEach((element, index) => {
//         element.addEventListener("mouseover", () => {
//             buttons[index].style.opacity = "1";
//         });

//         element.addEventListener("mouseout", () => {
//             buttons[index].style.opacity = "0";
//         });
//     });
// }

// ecosystem();
