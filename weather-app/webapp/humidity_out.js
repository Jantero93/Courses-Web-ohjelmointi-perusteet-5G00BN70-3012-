var drawHumidity_out = function(api) {
    const interval = $("#selectinterval").val();
    const signal = 'humidity_out';
    const url = api + '/' + signal + '/' + interval;

    const rndcolor = $("#random").val();
    let color = '#1E90FF'   

    if (rndcolor == 'true') {
      color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }
    
    if (rndcolor == 'false') {
      color = '#1E90FF'
    }
  
    $.getJSON(url, function (result) {
      console.log(result);
      let labels = [];
      let data = [];
     
      // kopioidaan result ja käännetään omaan taulukkoon
      let result_copy = [...result];
      result_copy.reverse();
      
      let html = '<table class= "table table-striped"><thead><tr><th>Date</th><th>Time</th><th>Name</th><th>Value</th></tr></thead><tbody>';

      for (let i = 0; i < result.length; i++) {
        let d = new Date(result[i].date_time);
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();        
        labels.push(date + " " + time);
        data.push(result[i][signal]);
                  
      }

      for (let i =0; i < result_copy.length; i++ ) {
        let d = new Date(result_copy[i].date_time);
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString(); 
        html += "<tr><td>" + date + "</td><td>" + time + "</td><td>" + signal + "</td><td>" + result_copy[i][signal] + "</td></tr>";
      }

     
      html += "</tbody></table>";
      $("#data_div").html(html);


      let ctx = document.getElementById("chart_canvas").getContext("2d");
        let myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            type: 'time',
            datasets: [{
              label: "Humidity out",
              data: data,
              backgroundColor: color,
              fill: true,
              
              borderColor: '#707070'
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