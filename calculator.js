const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function(req, res){
//     res.sendFile(__dirname+"/index.html");
// });

// app.post("/", function(req, res){
//     res.send("Result: "+(Number(req.body.num1)+Number(req.body.num2)));
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});
app.post("/bmicalculator", function (req, res) {
  var wt = parseFloat(req.body.wt);
  var ht = parseFloat(req.body.ht);
  var b = wt / (ht * ht);
  res.send("Your bmi is: " + b);
});
app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
