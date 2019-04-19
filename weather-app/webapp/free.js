var free = function(api) {
    
    const interval = $("#selectinterval").val();
    const signal = $("#freevalinta").val();  
    const url = api + '/' + signal + '/' + interval;
    
  
    $.getJSON(url, function (result) {
      console.log(result);
      let labels = [];
      let data = [];
     // let html = '<table class= "table table-striped"><thead><tr><th>Date</th><th>Time</th><th>Name</th><th>Value</th></tr></thead><tbody>';
     
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

      /*

      for (let i = 0; i < result.length; i++){
        let d = new Date(result[i].date_time);
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();        
        labels.push(date + ' ' + time);
        data.push(result[i][signal]);
        html += "<tr><td>" + date + "</td><td>" + time + "</td><td>" + name + "</td><td>" + result[i][signal] + "</td></tr>";
       // html += "<tr><td>" + date + " " + time + "</td><td>"
      }
      */
      html += "</tbody></table>";
      $("#data_div").html(html);


      let ctx = document.getElementById("chart_canvas").getContext("2d");
        let myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            type: 'time',
            datasets: [{
              label: signal,
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