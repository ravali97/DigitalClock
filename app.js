function currentTime(){
var d=new Date();
var a=d.getHours();
var b=d.getMinutes();
var c= d.getSeconds();
 if(a>=12){
   document.getElementById("hours").innerHTML=a;
document.getElementById("mins").innerHTML=b;
document.getElementById("seconds").innerHTML=c;
 document.getElementById("meridian").innerHTML="PM";
 }
  else{
document.getElementById("hours").innerHTML=a;
    
document.getElementById("mins").innerHTML=b;
document.getElementById("seconds").innerHTML=c;
    document.getElementById("meridian").innerHTML="AM";
  }
}
currentTime();
window.setInterval(currentTime,1000);