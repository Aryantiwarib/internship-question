// var D=new Date();
// D.setHours(0);
// D.setMinutes(0);
// D.setSeconds(0);
// document.getElementById("demo").innerHTML=D.toLocaleTimeString();
function start(){
    var time=new Date();
    time.setHours(0, 0, 0, 0);
    setInterval(() => {
        time.setSeconds(time.setSeconds()+1);
        document.getElementById("demo").innerHTML=time.toLocaleTimeString();
    },1000);
    // setInterval(start, 1000);
}