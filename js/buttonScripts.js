function Potato(pic, recipeText) {
  this.image = pic;
  this.recipe = recipeText;
}

var potatoSoup = new Potato("imgs/soup.png", "dice potatoes and put them in a pot with water and milk, cook for 20 minutes.");
var potatoFries = new Potato("imgs/fries.png", "cut potato into fry shapes and then put in boiling oil for 10 minutes.")

function potatoSoupDisplay() {
  document.getElementById("potatoInfo").innerHTML = potatoSoup.recipe;
  document.getElementById("potatoPic").src = potatoSoup.image;
}

function potatoFriesDisplay() {
  document.getElementById("potatoInfo").innerHTML = potatoFries.recipe;
  document.getElementById("potatoPic").src = potatoFries.image;
}

function potatoTotsDisplay() {}
function potatoGrilledDisplay() {}
function potatoCheeseyDisplay() {}
function potatoChipsDisplay() {}
function potatoBakedDisplay() {}
function potatoMashedDisplay() {}
