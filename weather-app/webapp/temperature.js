var drawTemperatureData = function(api) {
    const signal = 'temperature';
    const url = api + '/' + signal;
  
    $.getJSON(url, function (result) {
      console.log(result);
      let labels = [];
      let data = [];
     
      for (let i = 0; i < result.length; i++){
        let d = new Date(result[i].date_time);
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();
        // "
        labels.push(date + ' ' + time);
        data.push(result[i][signal]);

        html += "<tr><td>" + date + " " + time + "</td><td>"
      }


      let ctx = document.getElementById("chart_canvas").getContext("2d");
        let myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            type: 'time',
            datasets: [{
              label: "Temperature",
              data: data,
              fill: false,
              borderColor: '#1E90FF'
          }]
          },
          options: {
            animation: false,
            showLines: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        });
    })
  }