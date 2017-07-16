var SandwichMaker = (function(maker) {

 let totalPrice = 0;

 	maker.addTopping = function(toppingPrice) {
 			totalPrice = 0;
      totalPrice += toppingPrice;
      console.log("category price", totalPrice);
      return totalPrice;
  };

  return maker;

}(SandwichMaker || {}));