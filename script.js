google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart1);


function drawChart1() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Price', 'Month'],
      [50,7],[60,8],[70,8],[80,9],[90,9],[100,9],
      [110,10],[120,11],[130,14],[140,14],[150,15]
      ]);
    // Set Options
    const options = {
      title: 'House Prices vs Size',
      hAxis: {title: 'Square Meters'},
      vAxis: {title: 'Price in Millions'},
      legend: 'none'
    };
    // Draw Chart
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }
    
    
//bar chart
const xArray = ["Google", "Youtube", "Instagram", "Facebook", "Twitter"];
const yArray = ["12k", "40k", "18k", "53k", "16k"];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"Traffic by Device"};

Plotly.newPlot("myPlot", data, layout);



//pie-chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Google',70],
  ['Youtube',49],
  ['Instagram',44],
  ['Facebook',24],
  ['Twitter',15]
]);

// Set Options
const options = {
  title:'World wide traffic'
};

// Draw
const chart = new google.visualization.PieChart(document.getElementById('mypie'));
chart.draw(data, options);

}


