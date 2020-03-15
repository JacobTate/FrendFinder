var frendData = require("../app/data/friends");
module.exports = function(app){
    app.get("/api/frends", function(req, res){
        res.json(frendData);
    });
app.post("/api/frends", function(req, res){
    frendData.push(req.body);
    res.json(true);
});
};