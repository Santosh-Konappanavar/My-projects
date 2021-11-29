let wall =document.getElementById("wal");
let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=8d8f8f1fb06147859139af05a9f9a964`
async function getnews(){
    let  response = await fetch(url)
    let  collected_data = await response.json();
    console.log(collected_data)
    // topnews(collected_data.articles)
} 
function topnews(topnews){ 
topnews.forEach(function(el){
let div = document.createElement("div")
let img = document.createElement("img")
img.src = el.urlToImage
let title=document.createElement("h4")
title.innerText = el.title
let url = document.createElement("p")
url.innerText = el.url;
let desc=document.createElement("p")
desc.innerText=el.description;
let content = document.createElement("p");
content.innerText = el.content;
div.append(title,img,desc,content,url);
wall.append(div);
});
}
getnews();