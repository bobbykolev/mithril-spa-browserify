var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var loader = {};

loader.controller = function () {
	m.redraw.strategy("none");
};

loader.model = function () {

};

loader.view = function(ctrl) {
	return m("section", [
			m("div", "Loading")
		])
};

module.exports = loader;