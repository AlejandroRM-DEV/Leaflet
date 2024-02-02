import {expect} from 'chai';

/* global L */
import 'leaflet';
import {expect} from 'chai';

describe('General', () => {
	it.skip('namespace extension', () => {
		L.Util.foo = 'bar';
		L.Foo = 'Bar';

		expect(L.Util.foo).to.eql('bar');
		expect(L.Foo).to.eql('Bar');
	});
});
