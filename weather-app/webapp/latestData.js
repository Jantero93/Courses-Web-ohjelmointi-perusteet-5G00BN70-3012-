var printLatestData = function (api) {
    let html = ""; //apumuuttuja

    $.getJSON(api, function (result) {    
      // $("#data_div").html(JSON.stringify(result));

      let html = "<table class='table table-striped'><thead><tr><th>Date</th><th>Time</th><th>Value</th></tr></thead><tbody>";

      for (i = 0; i < result.length; i++) {
      //  let html = "<tr>"
        let d = new Date(result[i].date_time);
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();
        html += "<tr><td>" + date + " " + time + "</td><td>"
       

        for (name in result[i].data) {
            html += name + "</td><td> " + result[i].data[name] + "</td>"
        }
        html += "</tr>";

       // console.log(result[i]);
      //  html += "<br>" + result[i].date_time + "</br>"

      }

     html += "</tbody></table>";

      $("#data_div").html(html);

    });

};  