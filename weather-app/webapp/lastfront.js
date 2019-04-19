var lastfront = function(api) {
         
    const url = api + '/' + temperature;
    
  
    $.getJSON(url, function (result) {
      console.log(result[i]);
      let labels = [];
      let data;
      data = result[signal];
      console.log(data);
       let html = "<p>" + data +"</p>";

    $("#boxtext1").html(html);
      
      


      
    })
  }