var m = require('../../../libs/mithril/mithril.min');

var menu = {};

menu.controller = function() {
};

menu.view = function() {
  return m("nav", [
  		m('ul', [
	  		m('li', [
	  			m("a.home", {href: "/home", config: m.route}, "Home")
			]),
			m('li', [
	  			m("a.posts", {href: "/posts", config: m.route}, "Posts")
			])
		])
  ]);
};

m.module(document.getElementById("main-nav"), menu);

module.exports = menu;