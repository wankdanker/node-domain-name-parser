module.exports = function (str) {
	return new DomainName(str);
};

function DomainName(str) {
	this.tokenized = (str || "").split(/\./gi).reverse();
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

