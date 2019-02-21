/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    function createTweetElement(tweetObj) {
        // code to append <div> to <article>
        var $article = $("<article>").addClass("tweet");
        var $header = $("<header>").addClass("tweet-h");
        var $img = $("<img>").attr("src",tweetObj.user.avatars.small).addClass("tweeter");
        $header.append($img);

        var $div = $("<div>");
        var $p1 = $("<p>").addClass("alignleft").text(tweetObj.user.name);
        var $p2 = $("<p>").addClass("alignright username").text(tweetObj.user.handle);
        
        $div.append($p1);
        $div.append($p2);

        $header.append($div);
        
        $divClear = $("<div>").addClass("div-clear");

        $header.append($divClear);
        $article.append($header);
        var $p3 = $("<p>").addClass("body-a").text(tweetObj.content.text);

        $article.append($p3);

        var $footer = $("<footer>").addClass("tweet-f").text(tweetObj.created_at);
        var $1=$("<i>").addClass("fas fa-flag");
        var $2=$("<i>").addClass("fas fa-retweet");
        var $3=$("<i>").addClass("fas fa-heart");

        

        $footer.append($1);
        $footer.append($2);
        $footer.append($3);
        
        $article = $article.append($footer);

        return $article;
    };

        

    // Test / driver code (temporary). Eventually will get this from the server.
   
    
    
    
    // Test / driver code (temporary)
     // to see what it looks like
     // to add it to the page so we can make sure it's got all the right elements, classes, etc.





// Code for Task 2: Implement renderTweets function
// Fake data taken from tweets.json

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



    function renderTweets(tweets) {
        for(let a = 0; a < data.length; a++) {
        var $tweet = createTweetElement(data[a]);
        $('#tweet-container').append($tweet);

        }
    }
  
  renderTweets(data);


});

