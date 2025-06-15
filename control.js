function calcul() {
     let txt=document.getElementById("txt").value;
     ta=txt.trim()
     t=ta.length
     document.getElementById("r").innerHTML="عدد الحروف هو:"+t;
     if(ta.length==0){
          document.getElementById("r").innerHTML="اكتب حاجا";
     }
     
}
function face() {
     let txt=document.getElementById("txt").value;
     let r=document.getElementById("r").value;
     txt="";
     r="";
     document.getElementById("txt").innerHTML=txt;
     document.getElementById("r").innerHTML=r;



}
function like(btn){
   if(btn.textContent==="🤍"){
          btn.textContent="❤️";
     }
     else{
          btn.textContent="🤍";
     }
}

//let count=localStorage.like || 0;
//document.getElementById("l2").textContent=count;
//function like(){
  //   count++;
    // localStorage.like=count;
     //document.getElementById("l2").textContent=count;
//}
//let liked=localStorage.liked==="true";
//let coun=parseInt(localStorage.likes || 0);
//document.getElementById("l2").textContent=coun;
//document.getElementById("like").textContent=liked? "❤️":"🤍";
//function togglelike(){
  //   liked=!liked?1:-1;

//document.getElementById("l2").textContent=coun;
//localStorage.liked=liked;
//localStorage.likes=coun;
//}
let liked=localStorage.liked==="1";
let n=+localStorage.likes||0;
document.getElementById("like").textContent=liked?"❤️":"🤍";
document.getElementById("l2").textContent=n;
document.getElementById("like").onclick=()=>{
     liked=!liked;
     n+=liked?1:-1;
     document.getElementById("like").textContent=liked?"❤️":"🤍";
     document.getElementById("l2").textContent=n;
     localStorage.liked=liked?"1":"0";
     localStorage.likes=n;


}






