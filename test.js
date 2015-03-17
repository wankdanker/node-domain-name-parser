var test = require('tape')
	, parse = require('./')
	; 

test('basic test', function (t) {
	var d = parse('stoner.steve.weedcopter.com');
	t.equal(d.tld, 'com');
	t.equal(d.sld, 'weedcopter');
	t.equal(d.domain, 'steve.weedcopter.com');
	t.equal(d.domainName, 'weedcopter.com');
	t.equal(d.host, 'stoner');
	t.equal(d.level(3), 'steve');
	t.equal(d.level(), 4);
	t.end();
});
test('country-tlds', function(t) {
  var d = parse('stoner.steve.weedcopter.co.uk');
  t.equal(d.tld, 'co.uk');
  t.equal(d.sld, 'weedcopter');
  t.equal(d.domain, 'steve.weedcopter.co.uk');
  t.equal(d.domainName, 'weedcopter.co.uk');
  t.equal(d.host, 'stoner');
  t.equal(d.level(3), 'steve');
  t.equal(d.level(), 4);
  t.end();
});
test('.co url', function(t) {
  var d = parse('stoner.steve.weedcopter.co');
  t.equal(d.tld, 'co');
  t.equal(d.sld, 'weedcopter');
  t.equal(d.domain, 'steve.weedcopter.co');
  t.equal(d.domainName, 'weedcopter.co');
  t.equal(d.host, 'stoner');
  t.equal(d.level(3), 'steve');
  t.equal(d.level(), 4);
  t.end();
});
test('com.co url', function(t) {
  var d = parse('stoner.steve.weedcopter.com.co');
  t.equal(d.tld, 'com.co');
  t.equal(d.sld, 'weedcopter');
  t.equal(d.domain, 'steve.weedcopter.com.co');
  t.equal(d.domainName, 'weedcopter.com.co');
  t.equal(d.host, 'stoner');
  t.equal(d.level(3), 'steve');
  t.equal(d.level(), 4);
  t.end();
});
test('no error on country', function(t) {
  var d = parse(undefined);
  t.equal(d.tld, null);
  t.end(); // it didn't error :)
});
