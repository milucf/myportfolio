$(document).ready(function(){
    creatPortfolio();

    //Functions==========================
    $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
      
          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
          if (pos > winTop + 600) {
            $(this).removeClass("slide");
          }
        });
      });
      
    function creatPortfolio(){
        var portfolio=loadData();
        var htmlstr="";
        for(i=0;i<portfolio.length;i++){
            if(i%3==0)
            htmlstr+="<div class=\"row text-center\">";

            htmlstr+="<div class=\"col-sm-4\" ><div class=\"thumbnail slideanim\" >";
            htmlstr+="<img src=\"assets/images/"+portfolio[i].image+"\" alt=\""+portfolio[i].title+"\" >";
            htmlstr+="<h3>"+portfolio[i].title+"</h3><p>"+portfolio[i].desc+"</p>";
            htmlstr+="<p><a href='"+portfolio[i].link+"' >Source Code</a></p>";
            htmlstr+="</div></div>";

            if((i+1)%3 == 0)
            htmlstr+="</div>";
        }
        $("#portfolioDv").html(htmlstr);
    }

    //Data============================
    function loadData(){
        var data=[
            {
                title:"Hangman Game",
                desc:" a computer Hangman game.runs in the browser,powered by JavaScript code.",
                link:"https://github.com/milucf/week-3-game",
                image:"hangman.jpg"
            },
            {
                title:"RPG Viking Game",
                desc:"RPG Viking game is a web base RPG game, dynamically update HTML pages with the jQuery library.",
                link:"https://github.com/milucf/week-4-game",
                image:"vikings.jpg"
            },
            {
                title:"Trivia Game",
                desc:"Online Trivia game using JavaScript for the logic and jQuery to manipulate HTML.",
                link:"https://github.com/milucf/triviagame",
                image:"trivia.jpg"
            },
            {
                title:"RPS Multiplayer",
                desc:"An online multiplayer Rock Paper Scissors game, all with the help of Firebase, javascript and JQuery.",
                link:"https://github.com/milucf/rps-multiplayer",
                image:"rps.jpg"
            },
            {
                title:"Bamazon",
                desc:"This app will take in orders from customers and deplete stock from the store's inventory.using MySQL and Node js",
                link:"https://github.com/milucf/bamazon",
                image:"bamazon.jpg"
            },
            {
                title:"Liri",
                desc:"LIRI is a command line node app that takes in parameters and gives you back data.using twitter, lastfm, OMDB APIs and Node js",
                link:"https://github.com/milucf/liri-node-app",
                image:"liri.jpg"
            },
            {
                title:"Friend Finder",
                desc:"Basically a dating app, will take a survey then finds best overall match with its result; using express",
                link:"https://github.com/milucf/friend-finder",
                image:"friendfinder.jpg"
            },
            {
                title:"Eat Da Burger",
                desc:"a restaurant app that lets users input the names of burgers ordered by a cutomer.using  MySQL, Node, Express, Handlebars and Sequelize.",
                link:"https://github.com/milucf/sequelizedBurger",
                image:"edab.jpg"
            },
            {
                title:"News Scraper",
                desc:"This is a web app that lets users view and leave comments on the latest news.It uses Cheerio to scrape news from another site and Mongo database to store them.",
                link:"https://github.com/milucf/news-scrape",
                image:"newsscrape.jpg"
            },
        ];

    return data;
}
});