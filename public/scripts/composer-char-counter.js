$(document).ready(function() {
  // --- our code goes here ---

  $("#tweettext").on("keyup", function(e) {
    // console.log("hello Maddie");
    var currentText = $(this).val();
    var currentCharacterCount = currentText.length;

    
    var leftCharacters = 140 - currentCharacterCount;
    $('.counter').text(leftCharacters);
    if (leftCharacters < 0) {
        $('.counter').css({color:'red'});
    } else {
      $('.counter').css({color:'black'})

    }

    
    
  });
});
