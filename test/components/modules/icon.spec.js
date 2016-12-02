import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from 'components/modules';

test('outputs inline svg', t => {
	const wrapper = shallow(<Icon i="user" />);

	t.true(wrapper.is('svg'));
});

test('contains required paths', t => {
	[
		'search',
		'plus',
		'minus',
		'page',
		'times',
		'cart',
		'dollar',
		'user',
		'hourGlass',
		'signIn',
		'gear',
		'gears',
		'box',
		'down',
		'up',
		'left',
		'right',
		'creditCard',
		'menu',
		'check',
	].forEach(i => {
		const wrapper = shallow(<Icon i={ i } className="for-s-hl" />),
		      children = wrapper.children();

		t.is(children.length, 1);
		t.true(children.is('path'));
	});
});

test('passes in given classes', t => {
	const wrapper = shallow(<Icon i="user" className="test-class" />);

	t.true(wrapper.hasClass('test-class'));
});