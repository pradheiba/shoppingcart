$(document).ready(function(){
    
    
    
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(productList){
    var clothContainer = document.getElementById("cloth-container");
     var accessoryContainer = document.getElementById("accessory-container");

  for(var i=0;i<productList.length;i++){
      var card = document.createElement("div");
      card.id = i+1;
      card.className = "card";

      var imgWrap = document.createElement("a")
      imgWrap.href='./details.html?p='+productList[i].id;
      var img = document.createElement("img");
      img.className = "img-clth";
      img.src = productList[i].preview;


      var details = document.createElement("div");
      details.className = "details"
      var heading = document.createElement("h3");
      heading.className = "heading";
      heading.innerHTML = productList[i].name;
      var brand = document.createElement("h4");
      brand.className = "brand";
      brand.innerHTML = productList[i].brand;
      var price = document.createElement("h5");
      price.className = "price";
      price.innerHTML = productList[i].price;
      imgWrap.appendChild(img);
      card.appendChild(imgWrap);
      details.appendChild(heading);
      details.appendChild(brand);
      details.appendChild(price);
      // card.appendChild(productLink);
      card.appendChild(details);
      console.log(card);

      if(productList[i].isAccessory == false){
        clothContainer.appendChild(card);
      }
      else{
        accessoryContainer.appendChild(card);
      }
    }
  
  })
  
})
  
    
