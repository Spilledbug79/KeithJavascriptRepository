//Activity 1: DOM Manipulation - Changing Text

$(function () {
  $("#changeTextBtn").on("click", function () {
    $("p").text("the text has changed");
  });
});

//Activity 2: Show and Hide Elements
$(function () {
  $("#toggleBtn").on("click", function () {
    $("#hiddenSection").toggle("display:none");
  });
});

//Activity 3: Add CSS Styles Dynamically

$(function () {
  $("#styleBtn").on("click", function () {
    $(".item").css({ 'background': "red", "font-size": "30px" });
  });
});
