async function getfood(url){
    try{
        let  response = await fetch(url)
        let  collected_data = await response.json();
        return collected_data.meals;
    }catch(err){
        console.log(err)
    }
    // topfood(collected_data.categories)
} 
function topfood(food,location){ 
food.forEach((el)=>{
let div = document.createElement("div")
let img = document.createElement("img")
img.src = el.strMealThumb;
let title=document.createElement("h4")
title.innerText = el.strMeal;
div.append(img,title);
location.append(div);
});
}
export {getfood,topfood}













// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>debonce</title>
//     <style>
//         in{
//             width: 200px;
//         }
//         #movies{
//             height: 200px;
//             width: 206px;
//             border: solid 1px black;
//             border-top:none;
//             overflow: scroll;
//         }
//     </style>
// </head>
// <body>
//     <input oninput="debonce(displaymovie(),3000)" type="text" id="query" />
//     <div id="movies"></div>
// </body>
// </html>
{/* <script>
    let bomb;
    let movies= document.getElementById("movies")
    async function searchmovie(){
        try {
        let name = document.getElementById("query").value;
        let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=cc52b307`);
        let data = await response.json();
        return data.Search;
        console.log(data);
        } catch(err){
        console.log(err)
        }
    }
    async function displaymovie(){
        let moviedata = await searchmovie();
        if(moviedata===undefined){
            return false
        }
        console.log(moviedata)
        moviedata.forEach(function(movie){
        let p = document.createElement("p");
        p.innerText = movie.Title;
        movies.append(p);
        })
        
    }
    function debonce(func,delay){
   clearTimeout(bomb)
   bomb=setTimeout(function(){
        func();
       },delay)
   }
</script> */}