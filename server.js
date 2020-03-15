var express = require("express");

var app = express();

var PORT = process.env.PORT || 7070;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
