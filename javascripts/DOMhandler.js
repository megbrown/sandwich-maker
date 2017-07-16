
let finalSandwichPrice = 0;

let selectedTopping;

let toppingPrice;

let breadChooser = document.getElementById("bread-chooser");
let meatChooser = document.getElementById("meat-chooser");
let cheeseChooser = document.getElementById("cheese-chooser");
let condimentsChooser = document.getElementById("condiments-chooser");
let veggiesChooser = document.getElementById("veggies-chooser");
let getPriceButton = document.getElementById("get-price");


breadChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  toppingPrice = SandwichMaker.addBread(selectedTopping);
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
  console.log("final price", finalSandwichPrice);
});

meatChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  toppingPrice = SandwichMaker.addMeat(selectedTopping);
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
  console.log("final price", finalSandwichPrice);
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  toppingPrice = SandwichMaker.addCheese(selectedTopping);
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
  console.log("final price", finalSandwichPrice);
});

condimentsChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  toppingPrice = SandwichMaker.addCondiments(selectedTopping);
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
  console.log("final price", finalSandwichPrice);
});

veggiesChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  toppingPrice = SandwichMaker.addVeggies(selectedTopping);
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
  console.log("final price", finalSandwichPrice);
});

getPriceButton.addEventListener("click", function(event) {
	document.getElementById("price-output").innerHTML = `<h2>Amount Due: $${finalSandwichPrice.toFixed(2)}</h2>`;
})



function printToDom(selectedTopping) {
	document.getElementById("sandwich-output").innerHTML += `<h4>Item: ${selectedTopping}</h4>`;
}