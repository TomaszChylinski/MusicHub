
$('#scrapeArticlesButton').on("click", function(event) {
	app.get("/news", function(req, res) {
        event.preventDefault();
    // First, we grab the body of the html with axios
    axios.get("https://www.billboard.com/news").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      console.log('show response ', response)
      var $ = cheerio.load(response.data);
    
      $("h3.content-title").each(function(i, element) {
        // Save an empty result object
        var result = {};
       
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this).text();
        // working in the broswer having issue in the running - result.summary =  $(this).nextElementSibling.innerText;
        result.link = $(this).innerHTML()
    
        result.image = $(this).parent().parent().find(".image-container img").attr("src")
    
        
    
        // Create a new Article using the `result` object built from scraping
        db.News.create(result)
          .then(function(dbNews) {
            // View the added result in the console
            console.log('show me the new article', dbNews);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
    
      // Send a message to the client
      res.send("Your scrape had been successfully completed ");
    });
    });
    