var lookup = require('country-code-lookup');
var countries = {}

//Create an index of country codes
lookup.countries.forEach(function (country) {
	countries[country.internet] = country;
});

module.exports = function (str) {
	return new DomainName(str);
};

var isCountryMatch = function isCountryMatch(first, second) {
  var result = false;
  if (first != 'CO' && !!countries[first])
    result = true;
  else if ('CO.COM' == [first, second].join('.'))
    result = true;
  return result;
}

function DomainName(str) {
	this.tokenized = (str || "").split(/\./gi).reverse();
  var first = (this.tokenized[0] || '').toUpperCase();
  var second = (this.tokenized[1] || '').toUpperCase();
	if (isCountryMatch(first, second)) {
		var country = this.tokenized.shift();
		this.tokenized[0] = [this.tokenized[0], country].join('.');
	}
}

DomainName.prototype = {
	get tld() {
		return this.tokenized[0] || null;
	}
	, get sld() {
		return this.tokenized[1] || null;
	}
	, get domainName() {
		return [this.sld, this.tld].join('.');
	}
	, get domain() {
		var tmp = [].concat(this.tokenized);
		tmp.pop();

		return tmp.reverse().join('.');
	}
	, get host() {
		return this.tokenized[this.tokenized.length - 1 ];
	}
	, level : function (index) {
		if (!index) {
			return this.tokenized.length;
		}

		return this.tokenized[index - 1] || null;
	}
	, toString : function () {
		return [].concat(this.tokenized).reverse().join('.');
	}
};

