let right= document.getElementById("right");
let container=document.getElementById("temp");
let container1= document.getElementById("date")
let key ="b677145c5a1a0eb22c8a7ceb536647f8";
async function getweather(){
    try{
    let city= document.getElementById("city").value;
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=7&appid=${key}`;
    let res = await fetch(url);
    let data= await res.json();
    console.log(data)
       showdata(data)
    } catch (err){
       alert("Your Area Is Not Found")
    }
    city.value=""
}
function showdata(data){
    right.innerHTML =null;
    container.innerHTML=null;
    container1.innerHTML=null;
    let left_div = document.createElement("div");
    let right_div = document.createElement("div");
    let map = document.createElement("iframe");
    map.setAttribute("id","frame")
   
    map.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYTpLv6KlJYY8ehAQBzTxSR7R9bFlGUA
&q=${data.name}`
let div=document.createElement("div");
    let name = document.createElement("h2");
    name.innerText = `${data.name}`
    let icon1=document.createElement("img");
    icon1.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"
    let clouds = document.createElement("p");
    clouds.innerHTML = data.weather[0].description
    let temp=document.createElement("h2");
    let temp1 = data.main.temp;
    temp1 = Math.round(temp1-273);
    temp.innerText=`${temp1}˚C`
    let sunrise=document.createElement("p");
    let img1=document.createElement("img");
    img1.src="https://cdn-icons-png.flaticon.com/512/787/787604.png"
    let img2=document.createElement("img");
    img2.src="https://cdn-icons-png.flaticon.com/512/2924/2924879.png"
    sunrise.innerText=new Date(data.sys.sunrise*1000)
    let sunset = document.createElement("p");
    sunset.innerText=new Date(data.sys.sunset*1000)
    let wind = document.createElement("p");
    wind.innerText=`wind:${data.wind.speed}`;
    let maxtemp=document.createElement("p");
    let maxtemp1=data.main.temp_max;
    maxtemp1 = Math.round(maxtemp1-273);
    maxtemp.innerText=`max-temp:${maxtemp1}˚C`
    let mintemp=document.createElement("p");
    let mintemp1=data.main.temp_min;
    mintemp1 = Math.round(mintemp1-273);
    mintemp.innerText=`min-temp:${mintemp1}˚C`
    left_div.append(name,clouds,sunrise,sunset,wind,maxtemp,mintemp)
    container.append(temp,img1,sunrise,img2,sunset);
    container1.append(name,icon1,clouds,maxtemp,mintemp,wind);
    right_div.append(map);
    right.append(right_div);
}