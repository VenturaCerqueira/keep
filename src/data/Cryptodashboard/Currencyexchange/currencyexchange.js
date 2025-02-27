import Searchable from "react-searchable-dropdown";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
/* Chartjs (#bitcoin-chart) */
export const Bitcoinexhange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const bitcoinexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
  ],
  type: "line",
  datasets: [
    {
      data: [
        45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54,
        87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48,
      ],
      label: "Bitcoin Price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
};
/* Chartjs (#ethereum-chart) */

export const Ethereumexchange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const ethereumexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
  ],

  type: "line",
  datasets: [
    {
      data: [
        88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 45, 25, 32, 67, 49,
        72, 52, 55, 46, 54, 32, 74, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48,
      ],
      label: "Ethereum Price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#7886a0",
      bodyFontColor: "#7886a0",
      backgroundColor: "#fff",
      titleFontFamily: "Montserrat",
      bodyFontFamily: "Montserrat",
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            fontSize: 2,
            fontColor: "transparent",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  },
};
/* Chartjs (#ripple-chart) */
export const Rippleexchange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const rippleexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
  ],

  type: "line",
  datasets: [
    {
      data: [
        58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45,
        25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74,
      ],

      label: "Ripple Price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#7886a0",
      bodyFontColor: "#7886a0",
      backgroundColor: "#fff",
      titleFontFamily: "Montserrat",
      bodyFontFamily: "Montserrat",
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            fontSize: 2,
            fontColor: "transparent",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  },
};
/* Chartjs (#dash-chart) */

export const Dashexchange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const dashexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
  ],

  type: "line",
  datasets: [
    {
      data: [
        88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 45, 54, 51, 52, 48, 54, 67, 49,
        58, 78, 55, 41, 21, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74,
      ],

      label: "Dash-price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#7886a0",
      bodyFontColor: "#7886a0",
      backgroundColor: "#fff",
      titleFontFamily: "Montserrat",
      bodyFontFamily: "Montserrat",
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            fontSize: 2,
            fontColor: "transparent",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  },
};
/* Chartjs (#neo-chart) */

export const Neoexchange = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const neoexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
    "Date 25",
    "Date 26",
    "Date 27",
    "Date 28",
    "Date 29",
    "Date 31",
    "Date 32",
    "Date 33",
  ],

  type: "line",
  datasets: [
    {
      data: [
        47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46, 52, 75, 84, 89, 80, 42, 64, 28, 51,
      ],

      label: "Neo-price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#7886a0",
      bodyFontColor: "#7886a0",
      backgroundColor: "#fff",
      titleFontFamily: "Montserrat",
      bodyFontFamily: "Montserrat",
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            fontSize: 2,
            fontColor: "transparent",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  },
};

/* Chartjs (#litecoin-chart) */
export const Litecoinexchange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};
export const litecoinexchange = {
  labels: [
    "Date 1",
    "Date 2",
    "Date 3",
    "Date 4",
    "Date 5",
    "Date 6",
    "Date 7",
    "Date 8",
    "Date 9",
    "Date 10",
    "Date 11",
    "Date 12",
    "Date 13",
    "Date 14",
    "Date 15",
    "Date 16",
    "Date 17",
    "Date 18",
    "Date 19",
    "Date 20",
    "Date 21",
    "Date 22",
    "Date 23",
    "Date 24",
  ],

  type: "line",
  datasets: [
    {
      data: [
        54, 35, 24, 64, 43, 55, 39, 60, 61, 54, 62, 63, 44, 55, 64, 34, 46, 34,
        64, 50, 34, 53, 4, 43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64,
      ],

      label: "Litecoin-price",
      backgroundColor: "rgba(98, 89, 202, 0.2)",
      borderColor: "#6259ca",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#7886a0",
      bodyFontColor: "#7886a0",
      backgroundColor: "#fff",
      titleFontFamily: "Montserrat",
      bodyFontFamily: "Montserrat",
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            fontSize: 2,
            fontColor: "transparent",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  },
};

// forms:-
// export const Singleselect1 = () => {
//   const objectArray1 = [
//     { label: "BTC", value: "btc" },
//     { label: "LTC", value: "ltc" },
//     { label: "NEO", value: "neo" },
//     { label: "DASH", value: "dash" },
//     { label: " XRP", value: "xrp " },
//   ];
//   return (
//     <div>
//       <Multiselect
//         options={objectArray1}
//         singleSelect
//         displayValue="key"
//         closeMenuOnSelect={false}
//         defaultValue={[objectArray1[0], objectArray1[0]]}
//       />
//     </div>
//   );
// };
// // Second
// export const Singleselect2 = () => {
//   const objectArray2 = [
//     { label: "USD", value: "usd" },
//     { label: "EURO", value: "euro" },
//     { label: "RUPEE", value: "rupee" },
//     { label: "POUND", value: "pound" },
//     { label: " WON", value: "won " },
//     { label: " DINAR", value: "dinar " },
//     { label: " RIAL", value: "rial " },
//   ];
//   return (
//     <div>
//       <Multiselect
//         options={objectArray2}
//         singleSelect
//         displayValue="key"
//         closeMenuOnSelect={false}
//         defaultValue={[objectArray2[0], objectArray2[0]]}
//       />
//     </div>
//   );
// };





export function Singleselect1() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          { label: "BTC", value: "btc" },
          { label: "LTC", value: "ltc" },
          { label: "NEO", value: "neo" },
          { label: "DASH", value: "dash" },
          { label: " XRP", value: "xrp " },
        ]}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
    </div>
  );
}

export function Singleselect2() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          { label: "USD", value: "usd" },
          { label: "EURO", value: "euro" },
          { label: "RUPEE", value: "rupee" },
          { label: "POUND", value: "pound" },
          { label: " WON", value: "won " },
          { label: " DINAR", value: "dinar " },
          { label: " RIAL", value: "rial " },
        ]}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
    </div>
  );
}