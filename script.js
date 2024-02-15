async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1ab300d4cd6ab7f40af580e84143a631`;
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}

function fetchCity() {
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}