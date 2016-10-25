$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var checkedContinents = [];
    var checkedFoods = [];
    var checkedPets = [];
    var checkedShows = [];

    $("#fortuneDiv").show();
    $("input:checkbox[name=continents-lived]:checked").each(function() {
      var continentsLived = $(this).val();
      checkedContinents.push(continentsLived);
    });
    $("input:checkbox[name=foods]:checked").each(function() {
      var foods = $(this).val();
      checkedFoods.push(foods);
    });
    $("input:checkbox[name=pets]:checked").each(function() {
      var pets = $(this).val();
      checkedPets.push(pets);
    });
    $("input:checkbox[name=tv-shows]:checked").each(function() {
      var shows = $(this).val();
      checkedShows.push(shows);
    });

    if (checkedContinents.length >= 3) {
      $("#fortuneDiv").show();
      $(".outputParagraph").append("You are adventurous and brave. Your future will be exciting, but remember to prepare for danger....");
    } else {
      $("#fortuneDiv").show();
        $(".outputParagraph").append("You are methodical and cautious. Your future will not be very exciting unless you remember to try new things and take risks....")
    }

    if (checkedFoods.length >= 3) {
      $("#fortuneDiv").show();
      $(".outputParagraph").append(" You are open minded and like contrasting things. Your future will change many times for the better....");
    } else {
      $("#fortuneDiv").show();
        $(".outputParagraph").append(" You are certain of a few things and tend to be loyal to a small handful of important parts of your life. Your future will contain those to be most intimate with....")
    }

    if (checkedPets.length >= 3) {
      $("#fortuneDiv").show();
      $(".outputParagraph").append(" You are a loving person who cares for others. Soon this will payoff for you. Someone you show love to will rewad you monitarily....");
    } else {
      $("#fortuneDiv").show();
        $(".outputParagraph").append(" You tend to be selective in your commitments. Your future will lack hardship compared to others. But be wary- although avoiding hardship, you will also missout on unforseen benfits....")
    }

    if (checkedShows.length >= 3) {
      $("#fortuneDiv").show();
      $(".outputParagraph").append(" WARNING: things you look to for comfort will tear you from the things that matter most.");
    } else {
      $("#fortuneDiv").show();
        $(".outputParagraph").append(" WARNING: Your priorities may seem better than those around you. Don't build walls between those who are still growing!")
    }

    
  });
});
