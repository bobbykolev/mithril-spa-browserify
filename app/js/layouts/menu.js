var m = require('../../../libs/mithril/mithril.min');

var menu = {};

menu.controller = function() {
	this.setActiveClass = function (txt) {
		console.log(m.route())
		if (m.route() && m.route() != '/') {
			return  m.route().indexOf(txt) > -1 ? 'active':'';
		} else if (txt == 'home') {
			return  'active';
		}
	};
};

menu.view = function(ctrl) {
  return m("nav", [
  		m('ul', [
	  		m('li', [
	  			m("a", { class: ctrl.setActiveClass('home'), href: "/home", config: m.route }, "Home")
			]),
			m('li', [
	  			m("a", { class: ctrl.setActiveClass('posts'), href: "/posts", config: m.route }, "Posts")
			])
		])
  ]);
};

m.module(document.getElementById("main-nav"), menu);

module.exports = menu;