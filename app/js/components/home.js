var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var home = {};

home.controller = function () {
	this.title = 'Hello world';
	this.params = common.getQueryParams(window.location.hash);
	console.log('[Home]', this.params);
};

home.vm = function () {

};

home.view = function(ctrl) {
	return [
		m("h1", ctrl.title),
		m("section", [
			m("div[class='links']", [
				m("a[href='/fixtures']", {config: m.route}, "Fixtures")
			])
		])
	]
};

module.exports = home;