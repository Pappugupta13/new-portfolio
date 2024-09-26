window.addEventListener("scroll",(e)=>{
    const scroll_height =  document.documentElement.scrollTop;
    const x = document.querySelector("nav");
    if(scroll_height === 0){
      
        x.style.backgroundColor="#031926"
    }
    else{

    x.style.backgroundColor="rgb(46, 44, 44)"
    }
});
const chnage_nav = ()=>{
    const link_container = document.querySelector(".link-container");
    const p = link_container.style.display;
    if (p==="block"){
        link_container.style.display="none";
    }
    else{
        link_container.style.display="block";
    }
};
window.addEventListener("resize",(e)=>{
    const link_container = document.querySelector(".link-container");
if(e.target.innerWidth>768){
    link_container.style.display="inline-block";
}
else{
    link_container.style.display="none";
}
})

var typed = new Typed('.text', {
    strings: ['Web Developer', 'Game Developer'],
    typeSpeed: 80,
    loop: true
  });