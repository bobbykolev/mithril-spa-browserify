var m = require('../../../libs/mithril/mithril.min');
var common = require('../common');
var posts = {};

posts.controller = function () {
	var postList = m.request({method: "GET", url: "./fixtures357.json", background: true, initialValue: {fixtures:[]} })
  	postList.then(m.redraw);
	
	this.title = 'Fixtures';

	this.params = common.getQueryParams(window.location.hash);
	console.log('[Fixtures] ', this.params, m.route.param());

    return {
    	postList: postList
    }
};

posts.model = function () {
	/*var postsData = m.prop([]);
	var error = m.prop("");

	m.request({method: "GET", url: "./posts.json"})
	    .then(postsData, error);*/
};

posts.view = function(ctrl) {
	var tempMatchday = 0;
	return [
		m("h1", ctrl.title),
		m("section", [
			m("ul[class='posts']", [
				ctrl.postList().fixtures.map(function(fixture) {
					if (fixture.matchday != tempMatchday) {
						tempMatchday = fixture.matchday;
						return m("ul.fixture", [
								m("li.round", 'Round ' + fixture.matchday),
			        			m("li",[
					        		m("span.name", fixture.homeTeamName),
					        		m("span.result", fixture.result.goalsHomeTeam > -1 ? fixture.result.goalsHomeTeam : '-'),
					        		m("span.result", fixture.result.goalsAwayTeam > -1 ? fixture.result.goalsAwayTeam : '-'),
					        		m("span.name", fixture.awayTeamName),
	        				])
	        			]);
					} else {
			        	return m("ul.fixture", [
			        			m("li",[
					        		m("span.name", fixture.homeTeamName),
					        		m("span.result", fixture.result.goalsHomeTeam > -1 ? fixture.result.goalsHomeTeam : '-'),
					        		m("span.result", fixture.result.goalsAwayTeam > -1 ? fixture.result.goalsAwayTeam : '-'),
					        		m("span.name", fixture.awayTeamName),
	        				])
	        			]);
			    	}
			    })
			])
		])
	]
};

module.exports = posts;