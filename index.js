var date,time;
const myInterval = setInterval(setColor,1000);

function setColor() {
  let x = document.getElementById("A2");
  x.style.color = x.style.color == "white" ? "red" : "white";
}

function stopColor() {
  clearInterval(myInterval);
}
setInterval(() => {
var today = new Date();
date = today.getDate() + '/'+(today.getMonth()+1)+'/'+today.getFullYear();
time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("A2").innerText = time;
document.getElementById("A3").innerText = date;
}, 1000);

