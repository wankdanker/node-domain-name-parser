var test = require('tape')
	, DomainName = require('./')
	; 

test('basic test', function (t) {
	var d = new DomainName('stoner.steve.weedcopter.com');
	t.equal(d.tld, 'com');
	t.equal(d.sld, 'weedcopter');
	t.equal(d.domain, 'steve.weedcopter.com');
	t.equal(d.domainName, 'weedcopter.com');
	t.equal(d.host, 'stoner');
	t.end();
});

