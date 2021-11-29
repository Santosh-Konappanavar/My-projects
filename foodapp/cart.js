
  let cartItems = JSON.parse(localStorage.getItem("meals"));

  let firstDiv = document.getElementById("main");

  showMeal(cartItems);

  function showMeal(x) {
    firstDiv.innerHTML = null;
    x.forEach(function (item) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = item.strMealThumb;

      let price = document.createElement("h2");
      price.innerText =item.strMeal;

      div.append(img, price);

      firstDiv.append(div);
    });
  }
