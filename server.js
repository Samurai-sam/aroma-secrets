// Aroma Secrets "Server"

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/menu', function (req, res) {
  console.log('Menu is Called');

  //db.menu.find(function (err, docs) {
  //  console.log(docs);
  //  res.json(docs);
  //});
});

app.post('/order', function (req, res) {
  console.log("Create Order is Called:  "+req.body);
  //db.orders.insert(req.body, function(err, doc) {
  //  res.json(doc);
  //});
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log("Order Will be removed: "+id);
  //db.order.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
  //  res.json(doc);
  //});
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  //db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
  //  res.json(doc);
  //});
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  //db.contactlist.findAndModify({
  //  query: {_id: mongojs.ObjectId(id)},
  //  update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
  //  new: true}, function (err, doc) {
  //    res.json(doc);
  //  }
  //);
});

app.listen(8000);
console.log("Server running on port 8000");