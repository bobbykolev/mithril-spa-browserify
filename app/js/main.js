var m = require('../../libs/mithril/mithril.min');

var home = require('./components/home');
var posts = require('./components/posts');

var main = document.getElementById('wrapper');

m.route.mode = 'hash';
m.route(main, "/", {
  "/": home,
  "/home": home,
  "/post": posts
});