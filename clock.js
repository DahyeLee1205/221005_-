const clocks = document.querySelector("#clocks");

function getClocks(){
  const date = new Date();
  const now = date.toDateString();
  const hour = String(date.getHours()).padStart(2,"0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  clocks.innerText=`${now} ${hour}:${minute}`;
}
getClocks();
setInterval(getClocks, 1000);

