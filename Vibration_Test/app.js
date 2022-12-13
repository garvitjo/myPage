var button = document.getElementsByClassName("button")[0];

function vibrate(){
    alert("Button is pressed!!");
    navigator.vibrate([200,100,50,200,400,200,30,1000,500,1000,300,300,200])
}