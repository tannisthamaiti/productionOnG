const table = document.querySelector("#dataTable");
function resetTable() {
  while (table.childNodes.length > 2) {
    table.removeChild(table.lastChild);
  }
}

function selectSection(idx) {
  const grid = document.querySelector("#grid").children;
  Array.from(grid).forEach((a) => a.classList.remove("animate"));

  idx.forEach((a) => {
    grid[a - 1].classList.add("animate");
  });
}

function showDiv() {
  document.getElementById("chartArea").style.display = "block";
  runChart();
}
function reset() {
  document.getElementById("chartArea").style.display = "none";
}

function runChart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  const ctx2 = document.getElementById("myChart2").getContext("2d");
  const count = 100;
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: DATA1.slice(0, count).map((i, j) => j + 1),
      datasets: [
        {
          label: "Y",
          data: DATA1.slice(0, count).map((i) => i.y),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "X",
          data: DATA1.slice(0, count).map((i) => i.x),
          backgroundColor: "#007aff",
          borderColor: "#007aff",
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
    type: "line",
    data: {
      labels: DATA2.slice(0, count).map((i, j) => j + 1),
      datasets: [
        {
          label: "Y",
          data: DATA2.slice(0, count).map((i) => i.y),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "X",
          data: DATA2.slice(0, count).map((i) => i.x),
          backgroundColor: "#007aff",
          borderColor: "#007aff",
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

function formatDate(date) {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(date).toLocaleString("en-US", options).replace(",", "");
}

function tableRowAppend({ index, color }) {
  let jsonData;
  if (color == "skid1") {
    jsonData = DATA1;
  } else if (color == "Green") {
    jsonData = DATA2;
  } else if ((color = "Blue")) {
    jsonData = DATA3;
  }

  const item = jsonData[index];
  const x = formatDate(Date.now());
  const y = item.y.toFixed(2);
  const lessThan3 = y < 2.0 ? "Add Well 9" : "";
  let value = [];
  const combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [4, 5, 6],
    [1, 2, 3],
    [1, 4, 7],
    [7, 8, 9],
    [3, 6, 9],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
  ];

  if (y > 4) value = combinations[0];
  else if (y > 3.5) value = combinations[1];
  else if (y > 3) value = combinations[2];
  else if (y > 2.5) value = combinations[3];
  else if (y > 2) value = combinations[4];
  else if (y > 1.5) value = combinations[5];
  else if (y > 1) value = combinations[6];
  else if (y > 0.5) value = combinations[7];
  else if (y > 0) value = combinations[8];
  else if (y > -0.5) value = combinations[9];
  else if (y > -1.5) value = combinations[10];
  else if (y > -1.5) value = combinations[11];
  else if (y > -2) value = combinations[12];
  else if (y > -2.0) value = combinations[13];
  else if (y > -2.5) value = combinations[14];
  else if (y < -3) value = combinations[15];

  const newRow = document.createElement("tr");

  const cel1 = document.createElement("td");
  const cel2 = document.createElement("td");
  const cel3 = document.createElement("td");
  const cel4 = document.createElement("td");
  cel1.textContent = x;
  cel2.textContent = y;
  cel3.textContent = value.sort((a, b) => a - b).map((i) => `Well#${i + 1}`);
  cel4.textContent = lessThan3;
  newRow.appendChild(cel1);
  newRow.appendChild(cel2);
  newRow.appendChild(cel3);
  newRow.appendChild(cel4);

  selectSection(value);

  table.appendChild(newRow);
}

let intervalId;
let index = 1;
function onChangeColor(event) {
  if (intervalId || !color) {
    resetTable();
    clearInterval(intervalId);
    intervalId = null;
  }

  var color = event.value;

  var divVal = "";
  if (color == "skid1") {
    divVal = ["div3", "div4"];
  } else if (color == "Green") {
    divVal = ["div1"];
  }

  if (color) {
    intervalId = setInterval(() => {
      tableRowAppend({ index, color });
      index = (index + 1) % 1000; // Assuming 1000 data points
    }, 0.1 * 60 * 1000);
  }

  //   need to remove 'animate' class form each of the grid elements
  const grid = document.querySelector("#grid").children;
  Array.from(grid).forEach((a) => a.classList.remove("animate"));

  for (let i = 0; i < divVal.length; i++)
    document.getElementById(divVal[i]).classList.add("animate");
}
