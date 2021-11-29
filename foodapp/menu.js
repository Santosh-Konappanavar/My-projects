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
let id = document.createElement("p")
id.innerText = el.idMeal;
let btn=document.createElement("button");
btn.innerText="AddtoCart"
div.append(img,title,id,btn);
wall.append(div);
btn.onclick=function (){
    addtheproduct(food);
}
});
}
getfood();
if(localStorage.getItem("cart")==null){
    localStorage.setItem("cart",JSON.stringify([]));
}
function addtheproduct(food){
    let food_cart =JSON.parse(localStorage.getItem("cart"));
    food_cart.push(food);
    localStorage.setItem("cart",JSON.stringify(food_cart))
    console.log("food_cart:",food_cart);
}