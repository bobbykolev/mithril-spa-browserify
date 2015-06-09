var m = require('../../libs/mithril/mithril.min');

var menu = require('./layouts/menu');
var home = require('./components/home');
var fixtures = require('./components/fixtures');

var main = document.getElementById('main-container');

m.route.mode = 'hash';
m.route(main, "/", {
  "/": home,
  "/home": home,
  "/home/:id": home,
  "/fixtures": fixtures
});