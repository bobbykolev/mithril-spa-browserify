module.exports = {
	getQueryParams: function (qStr) {
		var qObj = {},
			i;

		qStr = qStr.replace(/#/gi, '').split('?');
		qObj.page = qStr[0];

		if (qStr[1]) {
			qStr = qStr[1].split('&');

			for(i=0;i<qStr.length;i++) {
				var qTemp = qStr[i].split('=');

				qObj[qTemp[0]] = qTemp[1];
			}
		}

		return qObj;
	}
};