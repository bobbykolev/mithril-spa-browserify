var m = require('../../../libs/mithril/mithril.min');

var menu = {};

menu.controller = function() {
	this.setActiveClass = function (txt) {
		//todo: improve - updates on every dom chage
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
	  			m("a", { class: ctrl.setActiveClass('fixtures'), href: "/fixtures", config: m.route }, "Fixtures")
			])
		])
  ]);
};

m.module(document.getElementById("main-nav"), menu);

module.exports = menu;