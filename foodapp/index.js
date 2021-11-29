let wall =document.getElementById("wal");
let url = `http://themealdb.com/api/json/v1/1/filter.php?a=indian`
async function getfood(){
    let  response = await fetch(url)
    let  collected_data = await response.json();
    console.log(collected_data)
    topfood(collected_data.meals)
} 
function topfood(food){ 
food.forEach(function(el){
let div = document.createElement("div")
let img = document.createElement("img")
img.src = el.strMealThumb;
let title=document.createElement("h4")
title.innerText = el.strMeal;
div.append(img,title);
wall.append(div);
});
}
getfood();