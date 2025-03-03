function getTemperature() {
    console.log("Fetching temperature data");
    try{
        fetch("resources/data/sample.json")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("temp").innerHTML = data.temperature;
        });
    } catch (error) {
        console.error(error);
    }
}