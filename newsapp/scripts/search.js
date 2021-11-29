let bomb;
    let news= document.getElementById("newsbox")
    async function searchnews(){
        try {
        let name = document.getElementById("query").value;
        let response = await fetch(`https://newsapi.org/v2/everything?q=${name}&from=2021-11-29&sortBy=popularity&apiKey=8d8f8f1fb06147859139af05a9f9a964`);
        let data = await response.json();
        return data.articles;
        console.log(data);
        } catch(err){
        console.log(err)
        }
    }
    async function displaynews(){
        let newsdata = await searchnews();
        if(newsdata===undefined){
            return false
        }
        console.log(newsdata);
        newsdata.forEach(function(el){
        let div1 = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = el.title;
        let img = document.createElement("img")
        img.src = el.urlToImage;
        div1.append(p,img);
        newsbox.append(div1);
        })
    }
    function debonce(func,delay){
   clearTimeout(bomb)
   bomb=setTimeout(function(){
        func();
       },delay)
   }