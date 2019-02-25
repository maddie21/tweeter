$(document).ready(function() {
  $(".new-tweet").on("submit", event => {
    event.preventDefault();

    if (ValidateForm() == true) {
      const message = $("#tweet-form").serialize();
// The call below is posting tweets to the database and also displays the new tweet.
      $.post("/tweets", message).then(tweet => {
        const elm = createTweetElement(tweet);
        $(elm).prependTo("#tweet-container");
      });
    }
  });
});
// Function to append child elements with the parent element
function createTweetElement(tweetObj) {
  var $article = $("<article>").addClass("tweet");
  var $header = $("<header>").addClass("tweet-h");
  var $img = $("<img>")
    .attr("src", tweetObj.user.avatars.small)
    .addClass("tweeter");
  $header.append($img);

  var $div = $("<div>");
  var $p1 = $("<p>")
    .addClass("alignleft")
    .text(tweetObj.user.name);
  var $p2 = $("<p>")
    .addClass("alignright username")
    .text(tweetObj.user.handle);

  $div.append($p1);
  $div.append($p2);

  $header.append($div);

  $divClear = $("<div>").addClass("div-clear");

  $header.append($divClear);
  $article.append($header);
  var $p3 = $("<p>")
    .addClass("body-a")
    .text(tweetObj.content.text);

  $article.append($p3);

  var $footer = $("<footer>")
    .addClass("tweet-f")
    .text(convertMiliseconds(tweetObj.created_at) + " days ago");
  var $1 = $("<i>").addClass("fas fa-flag");
  var $2 = $("<i>").addClass("fas fa-retweet");
  var $3 = $("<i>").addClass("fas fa-heart");

  $footer.append($1);
  $footer.append($2);
  $footer.append($3);

  $article = $article.append($footer);

  return $article;
}

//The below function renders tweets to the database
function renderTweets(tweets) {
  for (let a = 0; a < tweets.length; a++) {
    var $tweet = createTweetElement(tweets[a]);
    $("#tweet-container").append($tweet);
  }
}

//Loads the tweets from database and displays it on the UI/Website
function loadTweets() {
  $.ajax("/tweets", { method: "GET" }).then(function(returnData) {
    renderTweets(returnData);
  });
}
loadTweets();

//Validates the input
function ValidateForm() {
  var message = document.forms["tweetMessage"]["text"].value;
  if (!message.length > 0) {
    $("#error-message")
      .text("Tweet cannot be empty")
      .show();
    return false;
  }
  if (message.length > 140) {
    $("#error-message")
      .text("Tweet exceeds limit")
      .show();
    return false;
  }
  return true;
}

// The below function converts milliseconds to days

function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));
  return days;
}

// Fuction to enable toggle and slide

function enableTweet() {
  $(".new-tweet").slideToggle();
  $("#tweettext").select();
}
