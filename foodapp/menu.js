let wall =document.getElementById("wal");
let count=0;
let url = `http://themealdb.com/api/json/v1/1/filter.php?a=indian`
async function getfood(){
    let  response = await fetch(url)
    let  collected_data = await response.json();
    console.log(collected_data)
    topfood(collected_data.meals)
} 
function topfood(food){ 
 wall.innerHTML =null;
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
btn.addEventListener("click", function () {
    addtocart(el);
  });
div.append(img,title,id,btn);
wall.append(div);
});
}

function addtocart(item) {
    let array = JSON.parse(localStorage.getItem("meals")) || [];

    array.push(item);

    localStorage.setItem("meals", JSON.stringify(array));
  }
  getfood();

  function carthtml(){
      window.location.href="cart.html"
  }