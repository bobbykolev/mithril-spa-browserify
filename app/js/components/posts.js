var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var posts = {};

posts.controller = function () {
	this.title = 'Posts';
	this.params = common.getQueryParams(window.location.hash);
	console.log('[Page] Home', this.params);
};

posts.vm = function () {

};

posts.view = function(ctrl) {
	return [
		m("h1", ctrl.title),
		m("section", [
			m("div[class='links']", [
				m("a[href='/home']", {config: m.route}, "Home")
			])
		])
	]
};

module.exports = posts;