let wall =document.getElementById("wal");
let url = `http://www.themealdb.com/api/json/v1/1/categories.php`
async function getfood(){
    let  response = await fetch(url)
    let  collected_data = await response.json();
    console.log(collected_data)
    topfood(collected_data.categories)
} 
function topfood(food){ 
food.forEach(function(el){
let div = document.createElement("div")
let img = document.createElement("img")
img.src = el.strCategoryThumb;
let title=document.createElement("h4")
title.innerText = el.strCategory;
div.append(img,title);
wall.append(div);
});
}
getfood();