const icons = ["1.gif", "2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif"];
const nowIcon = icons[Math.floor(Math.random()*icons.length)];

const pickIcon = document.createElement("gif");

pickIcon.src = "gif/"+nowIcon +".gif";

document.body.appendChild(pickIcon);

console.log(pickIcon);
