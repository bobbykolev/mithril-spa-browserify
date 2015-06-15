var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var fixtureRow = {};

fixtureRow.controller = function (args) {
	m.redraw.strategy("diff");

	this.fixture = args.fixture;
};

fixtureRow.model = function () {

};

fixtureRow.view = function(ctrl) {
	return m("li",[
    		m("span.name", ctrl.fixture.homeTeamName),
    		m("span.result", ctrl.fixture.result.goalsHomeTeam > -1 ? ctrl.fixture.result.goalsHomeTeam : '-'),
    		m("span.result", ctrl.fixture.result.goalsAwayTeam > -1 ? ctrl.fixture.result.goalsAwayTeam : '-'),
    		m("span.name", ctrl.fixture.awayTeamName),
	])
};

module.exports = fixtureRow;