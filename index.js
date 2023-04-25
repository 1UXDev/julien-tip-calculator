// find all buttons
let radioButtons = document.querySelectorAll("[name='tip']");

// loop through the buttons
for (let i = 0; i <= radioButtons.length - 1; i++) {
  let currentButton = radioButtons[i];

  // add eventlisteners and fetch values of clicked button & entered amount
  currentButton.addEventListener("click", () => {
    let currentButtonValue = parseFloat(currentButton.value.replace("%", ""));
    let grossAmount = document.querySelector("#grossAmount").value;

    // do the math and put it into the HTML element
    document.querySelector("#overallPrice").innerHTML = (
      (grossAmount * currentButtonValue) /
      100
    ).toFixed(2);

    //display:block by appending class
    document.querySelector("#result").classList.add("show");
  });
}

// Pure JS Object Solution
/*

const mealCostObject = {
  mealList: ["Sprite", "Hamburger", "Fries"],
  mealCost: 5,
  //   tipPercentage: 10,
  tipPercentage: prompt("How much % do you want to tip?"),
  tipAmount: function () {
    return this.mealCost * (this.tipPercentage / 100);
  },
  totalCost: function () {
    return this.mealCost + this.tipAmount();
  },
};

console.log(
  "The total cost of your bill is:",
  mealCostObject2.totalCost(),
  "Euros"
);

*/
