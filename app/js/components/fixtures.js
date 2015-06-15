var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var loader = require('./loader');
var fixtureRow = require('./fixtureRow');
var fixtures = {};

fixtures.controller = function () {
	var fixtureList;

	this.title = 'Fixtures';

	m.redraw.strategy("diff");

	fixtureList = m.request({method: "GET", url: "./fixtures357.json", background: true })
  	fixtureList.then(m.redraw);

	this.params = common.getQueryParams(window.location.hash);
	console.log('[Fixtures] ', this.params, m.route.param());

    return {
    	fixtureList: fixtureList
    };
};

fixtures.model = function () {
	/*var fixturesData = m.prop([]);
	var error = m.prop("");

	m.request({method: "GET", url: "./fixtures.json"})
	    .then(fixturesData, error);*/	
};

fixtures.view = function(ctrl) {
	var tempMatchday = 0;
	return [
		m("h1", ctrl.title),
		m("section", [
			m("ul[class='fixtures']", [
				ctrl.fixtureList() ? 
					ctrl.fixtureList().fixtures.map(function(fixture) {
						if (fixture.matchday != tempMatchday) {
							tempMatchday = fixture.matchday;
							return m("ul.fixture", [
									m("li.round", 'Round ' + fixture.matchday),
				        			m.component(fixtureRow, {fixture: fixture})
		        			]);
						} else {
				        	return m("ul.fixture", [
				        			m.component(fixtureRow, {fixture: fixture})
		        			]);
				    	}
				    })
				:
				m.component(loader)
			])
		])
	]
};

module.exports = fixtures;