const apiKey="0986efbc80a49f4a5c6ba04682c6bbbd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function weather(city){
    const response=await fetch(apiUrl+ city+`&appid=${apiKey}`);
    let data=await response.json();
    document.querySelector(".place").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/humidity.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }


    document.querySelector(".weather").style.display= "block";

}
searchbtn.addEventListener("click",()=>{
    weather(searchBox.value);
});
