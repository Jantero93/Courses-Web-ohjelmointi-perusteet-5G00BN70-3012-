var viimeset = function(api) {   

    let html2 = "";
    
  
    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature", function (result) {
      console.log(result);
      let labels = [];
      let data = [];
    
      let result_copy = [...result];
      result_copy.reverse();    
      
    
      html2="<p1>Lämpötila: " + Math.round(result[19]["temperature"]) + " &#176;C</p1> <br></br>";      
     
      $("#latest1").html(html2);
      
      html2="";

      
    })

   

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
       

        html2+= "<p2> Tuulen nopeus: " + Math.round(result[19]["wind_speed"]) + " m/s</p2><br></br>";


        $("#latest2").html(html2);

      
      html2="";

    })

   

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/light", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
        
        
        html2+= "<p2> Kirkkaus: " + Math.round(result[19]["light"]) + " lx</p2><br></br>";


        $("#latest3").html(html2);        
        html2="";


    })

    $.getJSON("http://webapi19sa-1.course.tamk.cloud/v1/weather/humidity_out", function (result) {
        
        let labels = [];
        let data = [];
      
        let result_copy = [...result];
        result_copy.reverse();
        
     

        html2+= "<p2> Ilmankosteus ulkona: " + Math.round(result[19]["humidity_out"]) + " %</p2><br></br>";


        $("#latest4").html(html2);

    
      html2="";

    })



  }