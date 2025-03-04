var isFahrenheit = false;

function getTemperature() {
    console.log("Fetching temperature data");
    try{
        placeName = document.getElementById("city").value;
        if(placeName == "")
        {
            document.getElementById("temp").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            placeTemp = searchByName(data, placeName).temperatureCelsius;
            document.getElementById("temp").innerText = placeTemp + "°C";
            temperatureColorChange(placeTemp);
        });
    } catch (error) {
        console.error(error);
    }
}

function temperatureColorChange(temp)
{
    console.log(temp);
    if(temp <= 0)
    {
        document.getElementsByClassName("tempDisplay")[0].style.backgroundColor = "blue";
    }else if(temp <= 10)
    {
        document.getElementsByClassName("tempDisplay")[0].style.backgroundColor = "lightblue";
    }else if(temp <= 20)
    {
        document.getElementsByClassName("tempDisplay")[0].style.backgroundColor = "yellow";
    }else{
        document.getElementsByClassName("tempDisplay")[0].style.backgroundColor = "red";
    }

    return;
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
        placeName = document.getElementById("city").value;
        if(placeName == "")
        {
            document.getElementById("UV").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            uvIndex = searchByName(data, placeName).uvIndex;
            document.getElementById("UV").innerText = uvIndex;
            //colorChange(placeTemp);
        });
    } catch (error) {
        console.error(error);
    }
}

function getHumidity() {
    console.log("Fetching humidity data");
    try{
        placeName = document.getElementById("city").value;
        if(placeName == "")
        {
            document.getElementById("humidity").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {

            humidity = searchByName(data, placeName).humidity;
            document.getElementById("humidity").innerText = (humidity * 100) + "%";
        });
    } catch (error) {
        console.error(error);
    }
}

function getWind() {
    console.log("Fetching wind data");
    try{
        placeName = document.getElementById("city").value;
        if(placeName == "")
        {
            document.getElementById("wind").innerText = "Please enter a city name";
            return;
        }
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            placeTemp = searchByName(data, placeName).windSpeed;
            document.getElementById("wind").innerText = placeTemp + "/h";
            temperatureColorChange(placeTemp);
        });
    } catch (error) {
        console.error(error);
    }
}

function getAsFahrenheit()
{
    console.log("Switching type");
    if(!isFahrenheit)
    {
        currentTemp = document.getElementById("temp").innerText;
        console.log(currentTemp.substring(0,currentTemp.length-2));
        asF = (Number(currentTemp.substring(0,currentTemp.length-2)) * (9/5) + 32);
        console.log(asF);
        document.getElementById("temp").innerText = asF + "°F";

        isFahrenheit = !isFahrenheit;
        document
    }
}