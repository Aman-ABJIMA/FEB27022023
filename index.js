var date,time;
setInterval(() => {
var today = new Date();
date = today.getDate() + '/'+(today.getMonth()+1)+'/'+today.getFullYear();
time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("A2").innerText = time;
document.getElementById("A3").innerText = date;
}, 1000);

