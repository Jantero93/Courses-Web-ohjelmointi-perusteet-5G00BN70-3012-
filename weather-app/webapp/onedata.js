var viimeset = function(api) {   
    
    let signal = 'temperature';    
    let url = api + '/' + signal;   
    let html2 = "";
    
  
    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature", function (result) {
      console.log(result);
      let labels = [];
      let data = [];
    
      let result_copy = [...result];
      result_copy.reverse();
      
      
      console.log(result[19]["temperature"]);
    
      html2="<p1>Lämpötila: " + Math.round(result[19]["temperature"]) + " &#176;C</p1> <br></br>";

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

      
     // html += "</tbody></table>";
      $("#latest1").html(html2);

      //test
      html2="";

      
    })

    signal = 'wind_speed';    
    url = api + '/' + signal;  

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
        
        
        console.log(result[19]["wind_speed"]);

        html2+= "<p2> Tuulen nopeus: " + Math.round(result[19]["wind_speed"]) + " m/s</p2><br></br>";


        $("#latest2").html(html2);

      //test
      html2="";

    })

    signal = 'light'
    url = api + '/' + signal;

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/light", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
        
        
        console.log(result[19][light]);

        html2+= "<p2> Kirkkaus: " + Math.round(result[19]["light"]) + " lux</p2><br></br>";


        $("#latest3").html(html2);

        //test
        html2="";


    })

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/humidity_out", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
        
        
        console.log(result[19][light]);

        html2+= "<p2> Ilmankosteus ulkona: " + Math.round(result[19]["humidity_out"]) + " %</p2><br></br>";


        $("#latest4").html(html2);

      //test 
      html2="";

    })



  }