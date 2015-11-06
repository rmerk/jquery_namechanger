var classArray = [
                  "Jesus",
                  "Junkyard",
                  "Ryan",
                  "Coral",
                  "Dagger",
                  "Star",
                  "Walter",
                  "Yahweh",
                  "Tom",
                  "Jerry",
                  "Rick",
                  "Morty",
                  "Bufort",
                  "Ephraim",
                  "Jethro",
                  "Peter",
                  "Joel Jr.",
                  "Arthur",
                  "Klondike",
                  "Jazzhands",
                  "Chalupa",
                  "Batman"
];
$(document).ready(function(){

  $("button").on("click",function(){
    var appendValue = "<p>" + pickArrayIndex() + "</p>";

    if($(".displayName").text().length > 0){
      $(".displayName").empty();
    }//end if

    $(".displayName").append(appendValue).hide().fadeIn(5000);

  });//end button click event
});


//This function generates a random name for our class array.
function pickArrayIndex(){
  var randomIndex = classArray[Math.floor(Math.random() * classArray.length)];

  return randomIndex;
}
