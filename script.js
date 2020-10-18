$("#search").on("click",function(){
    var cityName=$("#cityname").val()
    var APIkey="1d8406748fb2673f7085b84e42a25061"
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+APIkey

    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
console.log(response)
       var city=response.name
       var date=moment(response.dt,"X").format("(MM/DD/YYYY)")
       var iconurl = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

       var temp= "temperature:"+ response.main.temp
       var humidity= "humidity:"+ response.main.humidity
       var windspeed= "windspeed:"+ response.wind.speed

       var img=$("<img>").attr("src",iconurl)
       var h3=$("<h3>").append(city,date,img)

       var p1=$("<p>").text(temp)
       var p2=$("<p>").text(humidity)
       var p3=$("<p>").text(windspeed)

       $(".displayWeather").append(h3,p1,p2,p3)


    })
})
