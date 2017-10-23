$(document).ready(function() {
  $("#submit").click(function(event) {
    var favoritePie = $("input#favoritePie").val();
    var favoriteCuisine = $("input#favoriteCuisine").val();
    var favoriteDrink = $("input#favoriteDrink").val();
    var favoriteAnimal = $("input#favoriteAnimal").val();

    var favoriteThings = [favoritePie, favoriteCuisine, favoriteDrink, favoriteAnimal];

    var favoriteFoods = [];

    favoriteFoods.push(favoriteThings[0], favoriteThings[2]);


    $("#newArray").append("<li>" + favoriteFoods[0] + "</li>" + "<li>" + favoriteFoods[1] + "</li>" )

      event.preventDefault();

  });
});
