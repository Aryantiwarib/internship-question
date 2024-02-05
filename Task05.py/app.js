let temp=document.querySelector("#temp");
let search_logo=document.querySelector("#search_logo");
let weather_img=document.querySelector("#weather_img");
let city_name=document.querySelector("#city");
let wind_now=document.querySelector("#wind_now");
let humidity=document.querySelector("#humidty");
let name=document.querySelector("#name");
let main=document.querySelector(".main")
let date=new Date().toLocaleTimeString();

if(date>'05:00:00' && date<'17:00:00'){
    main.style.backgroundColor='#6473e8';
}
else{
    main.style.backgroundColor='rgb(44 44 61 / 56%)';
}

console.log(city_name.value);	
const getdata= async (city) =>{
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1db1616b48f7be51d4b816945a4f8912`
    let respose=await fetch(URL);
    // console.log(respose);
    let data=await respose.json();
    wind_now.innerText=Math.floor((data['wind']['speed'])*3.6)+'Km/h';
    humidity.innerText=data['main']['humidity']+'%';
    // console.log(data['wind']['speed']);
    // console.log(data['main']['humidity']);
    // console.log(data['main']['temp']);
    temp.innerText=Math.floor(data['main']['temp']-273.15)+'°';
    name.innerText=city;
    if(Math.floor(data['main']['temp']-273.15)>20){
        weather_img.src='sun.png';
    }
    else{
        weather_img.src='cloud.png';
    }

}

// search_logo.addEventListener('click', getdata(city_name.value));
// getdata(city_name.value);///this is not a correct way


search_logo.addEventListener("click", function(){
    getdata(city_name.value);
});

// function d(city) {
//     console.log(city);
// }

// search_logo.addEventListener('click', d(city_name.value));


// d();
