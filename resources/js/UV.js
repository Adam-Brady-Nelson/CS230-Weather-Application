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

function colorChange(temp)
{

}