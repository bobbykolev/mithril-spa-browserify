var m = require('../../../libs/mithril/mithril.min');
var home = {};

home.controller = function () {
	this.greeting = 'Hello world';
	console.log('[Page] Home');
};

home.vm = function () {

};

home.view = function(ctrl) {
	return [
		m("h1", ctrl.greeting),
		m("section", [
			m("div[class='links']", [
				m("a[href='/post']", {config: m.route}, "Posts")
			])
		])
	]
};

module.exports = home;