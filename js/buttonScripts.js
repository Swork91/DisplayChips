function Potato(pic, recipeText) {
  this.image = pic;
  this.recipe = recipeText;
}

var potatoFries = new Potato("imgs/fries.png", "cut potato into fry shapes and then put in boiling oil for 10 minutes.")
var taterTots = new Potato("imgs/tots.png", "grate some potatoes then mash the bits into balls and fry em for 3 minutes.")
var grilledPotato = new Potato("imgs/grilled.png", "chop up those taters and then slam them on the grill for a 15 minute burn.")
var cheesyPotato = new Potato("imgs/cheese.png", "CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESE")
var potatoChips = new Potato("imgs/chips.png", "Open the bag and eat them chips ya dolt.");
var bakedPotato = new Potato("imgs/baked.png", "poke some holes in a potato and then microwave it for 20 minutes.")
var potatoSoup = new Potato("imgs/soup.png", "dice potatoes and put them in a pot with water and milk, cook for 20 minutes.");
var mashedPotatos = new Potato("imgs/mashed.png", "put potatoes in a bowl and SMASH EM then add some mayo or something.")

function potatoFriesDisplay() {
  document.getElementById("potatoInfo").innerHTML = potatoFries.recipe;
  document.getElementById("potatoPic").src = potatoFries.image;
}

function potatoTotsDisplay() {
  document.getElementById("potatoInfo").innerHTML = taterTots.recipe;
  document.getElementById("potatoPic").src = taterTots.image;
}

function potatoGrilledDisplay() {
  document.getElementById("potatoInfo").innerHTML = grilledPotato.recipe;
  document.getElementById("potatoPic").src = grilledPotato.image;
}

function potatoCheeseyDisplay() {
  document.getElementById("potatoInfo").innerHTML = cheesyPotato.recipe;
  document.getElementById("potatoPic").src = cheesyPotato.image;
}

function potatoChipsDisplay() {
    document.getElementById("potatoInfo").innerHTML = potatoChips.recipe;
    document.getElementById("potatoPic").src = potatoChips.image;
}

function potatoBakedDisplay() {
    document.getElementById("potatoInfo").innerHTML = bakedPotato.recipe;
    document.getElementById("potatoPic").src = bakedPotato.image;
}

function potatoSoupDisplay() {
  document.getElementById("potatoInfo").innerHTML = potatoSoup.recipe;
  document.getElementById("potatoPic").src = potatoSoup.image;
}

function potatoMashedDisplay() {
    document.getElementById("potatoInfo").innerHTML = mashedPotatos.recipe;
    document.getElementById("potatoPic").src = mashedPotatos.image;
}
