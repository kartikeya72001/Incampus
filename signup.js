console.log("My")
document.getElementById("b2").onclick = function(){
    console.log("nikhil");
    document.getElementById("background").style.transform = "translate(-100%,0)";
    document.getElementById("background").style.borderRadius = "40px 0px 0px 40px";
    document.getElementById("background").style.transition = "0.5s";
    document.getElementById("signin").style.display = "none";
    document.getElementById("hello").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("signup").style.display = "block";
}
document.getElementById("b3").onclick = function(){
    document.getElementById("background").style.transform = "translate(0%,0)";
    document.getElementById("background").style.borderRadius = "0px 40px 40px 0px";
    document.getElementById("background").style.transition = "0.5s";
    document.getElementById("signin").style.display = "block";
    document.getElementById("hello").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("signup").style.display = "none";
}