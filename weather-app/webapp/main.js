
$(document).ready(function () {
    const api = "http://webapi19sa-1.course.tamk.cloud/v1/weather";
    //muuttuja millä "sivulla" ollaan
    let current = "home";
    
    //Otsikko
    $("#title_div").html("<h1>Tervetuloa sääasemalle</h1>")  
    
    //Aikaväli
    console.log($("#selectinterval"));
    $("#interval_div").hide()

    //Vapaa valinta
    $("#free_div").hide()
    //Satunnainen väri
    $("#randomColor").hide()
    $("#data500").hide()
    $("#chart_div").hide()
    

    
    $("#home").click(function (e) {
        location.reload();                  
    });   

    $("#last_values").click(function (e) {
        current = "last_values";
        $("#lastbox").hide()
        $("#free_div").hide()
        $("#title_div").html("<h1>Last 500 measurements</h1>")
        $("#chart_div").hide()
        $("#interval_div").hide() 
        $("#randomColor").hide()  
        $("#data500").show()
        $("#data_div").hide()        
        printLatestData(api);
                
    });

    $("#temperature").click(function () {
        current = "temperature";
        $("#lastbox").hide()
        $("#free_div").hide()
        $("#interval_div").show()
        $("#title_div").html("<h1>Temperature</h1>")
        $("#data_div").show()
        $("#chart_div").show()  
        $("#randomColor").show()     
        $("#data500").hide() 
        drawTemperatureData(api);
        
       
    });

    $("#humidity_out").click(function (e) {
        current = "humidity_out";
        $("#lastbox").hide()
        $("#free_div").hide()
        $("#interval_div").show()
        $("#title_div").html("<h1>Humidity out</h1>")
        $("#data_div").show()
        $("#chart_div").show()   
        $("#randomColor").show()    
        $("#data500").hide()        
        drawHumidity_out(api);
        
    });

    $("#light").click(function (e) {
        current = "light";
        $("#lastbox").hide()
        $("#free_div").hide()
        $("#interval_div").show()
        $("#title_div").html("<h1>Light</h1>")
        $("#data_div").show()
        $("#chart_div").show()      
        $("#randomColor").show()   
        $("#data500").hide()       
        drawLight(api);
        
    });

    $("#free").click(function () {
        current = "free"
        $("#lastbox").hide()
        $("#title_div").html("<h1>Vapaa valinta</h1>")
        $("#interval_div").show()
        $("#free_div").show()
        $("#data_div").show()
        $("#chart_div").show()
        $("#randomColor").show()  
        $("#data500").hide()   
        free(api);
    });

    //Vaihtaa haluttuun signaalin kun valitsee
    $("#freevalinta").change(function () {
        if (current == 'free') {
            $("#free").trigger("click");
        }

    });    

    //Vaihda intervalia kun valitsee
    $("#selectinterval").change(function() {
        
        if(current == 'temperature') {
            $("#temperature").trigger("click");
        }

        if(current == 'light') {
            $("#light").trigger("click");
        }

        if(current == 'humidity_out') {
            $("#humidity_out").trigger("click");
        }

        if(current == 'free') {
            $("#free").trigger("click");
        }
        
    });

    //Vaihda väriä kun valitsee
    $("#random").change(function() {

        if(current == 'temperature') {
            $("#temperature").trigger("click");
        }

        if(current == 'light') {
            $("#light").trigger("click");
        }

        if(current == 'humidity_out') {
            $("#humidity_out").trigger("click");
        }

        if(current == 'free') {
            $("#free").trigger("click");
        }

    });
   

});


