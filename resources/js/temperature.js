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
            placeTemp = searchByName(data, placeName)
            document.getElementById("temp").innerText = placeTemp
        });
    } catch (error) {
        console.error(error);
    }
}

function searchByName(dataIn, name)
{
    for(i = 0; i < dataIn.length; i++)
    {
        if(dataIn[i].cityName == name)
        {
            return dataIn[i].temperatureCelsius;
        }
    }

    return "Not found";
}