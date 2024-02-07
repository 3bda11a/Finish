let btn = document.getElementById("btn");
let lab = document.getElementById("1");
let service = document.getElementById("serv");
let body = document.getElementsByTagName("body");


setTimeout(() => {
   lab.style.color = "#FCFCFC"
},1000);

setTimeout(() => {
   lab.style.color = "#0060FF"
},2000);

setTimeout(() => {
      lab.style.color = "#FF0000"
},4000);


window.onscroll = () => {
   if (scrollY >= 400){
      btn.style.display = 'block';

   }
   else{
      btn.style.display = 'none';
   }
}
btn.onclick = () =>{
   scroll({
      left:0,
      top:0,
      behavior:"smooth",
   });
}


function Project(){
   scrollTo({
      left:0,
      top:234,
      behavior:"smooth",
   });
}
