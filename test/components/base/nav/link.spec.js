import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Link from 'components/base/nav/link';
import { Icon } from 'components/modules';

const testLink = {
	icon  : 'user',
	title : 'test'
};

test('link includes icon', t => {
	const wrapper = shallow(<Link info={ testLink } className="" />);

	t.is(wrapper.find(Icon).props().i, 'user');
});

test('link includes title', t => {
	const wrapper = shallow(<Link info={ testLink } className="" />);

	t.is(wrapper.render().text(), 'test');
});
