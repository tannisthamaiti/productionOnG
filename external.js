// test area start

// test area end

function onChangeColor(event) {
  var color = event.value;

  var divVal = "";
  if (color == "skid1") {
    divVal = ["div3", "div4"];
  } else if (color == "Green") {
    divVal = ["div1"];
  }

  //   need to remove 'animate' class form each of the grid elements
  const grid = document.querySelector("#grid").children;
  Array.from(grid).forEach((a) => a.classList.remove("animate"));

  for (let i = 0; i < divVal.length; i++)
    document.getElementById(divVal[i]).classList.add("animate");
  //style["background-color"]=color;
}

function startTime() {
  const today = new Date();
  let h = today.getHours() - 5;
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById(
    "runTime"
  ).innerHTML = `<strong>System run time :</strong>${h}:${m}:${s}`;

  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
var number;

function addFlow(totalFlow, number) {
  return totalFlow + number * 100;
}
var totalFlow = 0;
function repeat() {
  number = Math.random().toPrecision(4);
  totalFlow = addFlow(totalFlow, number);
  flowRandomSelection(totalFlow);
  document.getElementById(
    "flowTime"
  ).innerHTML = `<strong>Total flow :&nbsp;</strong>${totalFlow.toFixed(
    2
  )}m<sup>3</sup>;`;
}

function flowRandomSelection(totalFlow) {
  var divVal = "";
  const newFlow = parseInt(totalFlow / 1000);

  if (newFlow === 0) divVal = ["div1"];
  else if (newFlow === 1) divVal = ["div2"];
  else if (newFlow === 2) divVal = ["div3"];
  else if (newFlow === 3) divVal = ["div4"];
  else if (newFlow === 4) divVal = ["div5"];
  else if (newFlow === 5) divVal = ["div6"];
  else if (newFlow === 6) divVal = ["div7"];
  else if (newFlow === 7) divVal = ["div8"];
  else if (newFlow === 8) divVal = ["div9"];

  //   need to remove 'animate' class form each of the grid elements
  const grid = document.querySelector("#grid").children;
  Array.from(grid).forEach((a) => a.classList.remove("animate-flow"));

  for (let i = 0; i < divVal.length; i++)
    document.getElementById(divVal[i]).classList.add("animate-flow");
  //style["background-color"]=color;
}

setInterval(repeat, 3 * 1000);

function showDiv() {
  document.getElementById("welcomeDiv").style.display = "block";
}
function reset() {
  document.getElementById("welcomeDiv").style.display = "none";
}
