var isShowingF = false;
var temperatureAsC = 0;
var temperatureAsF = 0;

function getTemperature() {
    console.log("Fetching temperature data");
    try{
        placeName = sessionStorage.getItem("City");
        console.log(placeName);
        if(placeName == "" || placeName == null)
        {
            document.getElementById("temp").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            placeTemp = searchByName(data, placeName).temperatureCelsius;
            temperatureAsC = placeTemp;
            temperatureAsF = fahrenheitCalc(temperatureAsC);
            document.getElementById("temp").innerText = temperatureAsC + "°C";
            windAndTempcolorChange(temperatureAsC);
        });
    } catch (error) {
        console.error(error);
    }
}

function windAndTempcolorChange(temp)
{
    if(temp <= 0)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "blue";
    }else if(temp <= 10)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "lightblue";
    }else if(temp <= 20)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "yellow";
    }else{
        document.getElementsByClassName("Display")[0].style.backgroundColor = "red";
    }

    return;
}

function UVcolorChange(uv)
{
    if(uv <= 2)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "green";
    }else if(uv <= 5)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "yellow";
    }else if(uv <= 7)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "orange";
    }else if(uv <= 10)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "red";
    }else{
        document.getElementsByClassName("Display")[0].style.backgroundColor = "purple";
    }
}

function humidityColorChange(humidity)
{
    if(humidity <= 0.3)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "blue";
    }else if(humidity <= 0.6)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "lightblue";
    }else if(humidity <= 0.9)
    {
        document.getElementsByClassName("Display")[0].style.backgroundColor = "yellow";
    }else{
        document.getElementsByClassName("Display")[0].style.backgroundColor = "red";
    }
}

function searchByName(dataIn, name)
{
    for(i = 0; i < dataIn.length; i++)
    {
        if(dataIn[i].cityName == name)
        {
            return dataIn[i]
        }
    }

    return "Not found";
}



function getUV() {
    console.log("Fetching UV data");
    try{
        placeName = sessionStorage.getItem("City");
        if(placeName == ""|| placeName == null)
        {
            document.getElementById("UV").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            uvIndex = searchByName(data, placeName).uvIndex;
            document.getElementById("UV").innerText = uvIndex;
            UVcolorChange(uvIndex);
        });
    } catch (error) {
        console.error(error);
    }
}

function getHumidity() {
    console.log("Fetching humidity data");
    try{
        placeName = sessionStorage.getItem("City");
        if(placeName == ""|| placeName == null)
        {
            document.getElementById("humidity").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {

            humidity = searchByName(data, placeName).humidity;
            document.getElementById("humidity").innerText = (humidity * 100) + "%";
            humidityColorChange(humidity);
        });
    } catch (error) {
        console.error(error);
    }
}

function getWind() {
    console.log("Fetching wind data");
    try{
        placeName = sessionStorage.getItem("City");
        if(placeName == ""|| placeName == null)
        {
            document.getElementById("wind").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            placeTemp = searchByName(data, placeName).windSpeed;
            document.getElementById("wind").innerText = placeTemp + "/h";
            windAndTempcolorChange(placeTemp.substring(0, placeTemp.length - 2));
        });
    } catch (error) {
        console.error(error);
    }
}

function fahrenheitCalc(numIn)
{
    asF = ((numIn * (9/5)) + 32);
    return asF;
}

function displayAsOtherType()
{
    console.log("Switching type");
    if(!isShowingF)
    {
        document.getElementById("temp").innerText = temperatureAsF + "°F";
        isShowingF = !isShowingF;
        document.getElementById("typeChangeButton").innerText = "Get Temperature as Celsius"
    }else{
        document.getElementById("temp").innerText = temperatureAsC + "°C";
        isShowingF = !isShowingF;
        document.getElementById("typeChangeButton").innerText = "Get Temperature as Fahrenheit"
    }
}

function setCityNameSessionStorage()
{
    sessionStorage.setItem("City", document.getElementById("city").value);
}

function getCityNameSessionStorage()
{
    let returned = sessionStorage.getItem("City");
    return returned
}

let field = document.getElementById("city");

if (sessionStorage.getItem("autosave")) {
  field.value = sessionStorage.getItem("autosave");
}

field.addEventListener("change", () => {
  sessionStorage.setItem("autosave", field.value);
})