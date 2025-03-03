function getHumidity() {
    console.log("Fetching data");
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