// test area start

// test area end
var repeatChangeColorId = null;
document
  .querySelector("#colorSelect")
  .addEventListener("onchange", onChangeColor);
function onChangeColor(event) {
  if (repeatChangeColorId) {
    clearInterval(repeatChangeColorId);
    totalFlow = 0;
  }

  var color = event.value;

  var divVal = "";
  if (color == "skid1") {
    divVal = ["div3", "div4"];
  } else if (color == "Green") {
    divVal = ["div1"];
  }

  if (divVal) {
    repeatChangeColorId = setInterval(repeat, 100);
  } else {
    clearInterval(repeatChangeColorId);
    totalFlow = 0;
    repeat(true);
    flowRandomSelection();
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
}

setInterval(startTime, 1000);

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
function repeat(isZero) {
  number = Math.random().toPrecision(4);
  totalFlow = addFlow(totalFlow, number);
  flowRandomSelection(totalFlow);
  document.getElementById("flowTime").innerHTML = isZero
    ? 0
    : totalFlow.toFixed(2);
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

function showDiv() {
  document.getElementById("chartArea").style.display = "flex";
}
function reset() {
  document.getElementById("chartArea").style.display = "none";
}

function runChart() {
  const data = [
    {
      label: "January",
      value: "23",
    },
    {
      label: "February",
      value: "45",
    },
    {
      label: "March",
      value: "78",
    },
    {
      label: "April",
      value: "56",
    },
    {
      label: "May",
      value: "89",
    },
    {
      label: "June",
      value: "72",
    },
    {
      label: "July",
      value: "45",
    },
    {
      label: "August",
      value: "65",
    },
    {
      label: "September",
      value: "34",
    },
    {
      label: "October",
      value: "56",
    },
    {
      label: "November",
      value: "78",
    },
    {
      label: "December",
      value: "90",
    },
  ];
  const labels = data.map((item) => item.label);
  const values = data.map((item) => item.value);

  const ctx = document.getElementById("myChart").getContext("2d");
  const ctx2 = document.getElementById("myChart2").getContext("2d");
  const ctx3 = document.getElementById("myChart3").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Data from CSV 1",
          data: values,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  const myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Data from CSV 2",
          data: values,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  const myChart3 = new Chart(ctx3, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Data from CSV 3",
          data: values,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

runChart();
