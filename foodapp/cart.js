let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)
let main =document.getElementById("main");
function show() {
  cart.forEach(function(products){
      console.log(products.meals);
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = products.strMealThumb
      let product_name = document.createElement("p");
      product_name.innerText =products.strMeal;

      let addtocart_btn = document.createElement("button");
      addtocart_btn.innerHTML = "+ Add";
      
    //   addtocart_btn.onclick = function (){
    //       addtoCart(products);
    //   };
      div.append(img,product_name,addtocart_btn);
      main.append(div);
  });
}
show();