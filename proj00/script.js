const crs = document.querySelector("#cursor");
const main = document.querySelector("body");
const hero = document.querySelector("#hero");

main.addEventListener("mousemove",(data)=>{
    // console.log(data);
    crs.style.left = data.x+"px" ;
    crs.style.top = data.y+"px" ;

})