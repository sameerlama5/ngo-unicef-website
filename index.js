const bars =document.getElementById("bars");
const xmark = document.getElementById("xmark")
const laptopnavbarol=document.getElementById("mobilenavbar-content");

if(bars){
      bars.addEventListener('click',()=>{
        laptopnavbarol.classList.add("active")
      })
}

if(xmark){
    xmark.addEventListener('click' , ()=>{
        laptopnavbarol.classList.remove("active")
    })
}


const showlowerHeader = () =>{
    const lowernavbar  = document.getElementById('lower-nav-bar')
    this.scrollY >=100 ? lowernavbar.classList.add("Header")
                      : lowernavbar.classList.remove("Header")
}

window.addEventListener('scroll', showlowerHeader)