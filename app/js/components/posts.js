var m = require('../../../libs/mithril/mithril.min');
var posts = {};

posts.controller = function () {
	this.greeting = 'Posts';
	console.log('[Page] posts');
};

posts.vm = function () {

};

posts.view = function(ctrl) {
	return [
		m("h1", ctrl.greeting),
		m("section", [
			m("div[class='links']", [
				m("a[href='/home']", {config: m.route}, "Home")
			])
		])
	]
};

module.exports = posts;