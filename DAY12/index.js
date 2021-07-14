// check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// clicking X to delete TODO
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// New To-Do
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grabbing new Todo text from input
    var todoText = $(this).val();
    // Setting value empty again
    $(this).val("");
    // Create a new li and add it to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

// Add new Todo option
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
});
