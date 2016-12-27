import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import { WorkingButton, Icon } from 'components/modules';

test('It supports icons', t => {
	const props = {
	      	label: 'test',
	      	i: 'cog'
	      },
	      wrapper = shallow(<WorkingButton { ...props } />);

	t.is(wrapper.find(Icon).length, 1);
});

test('It doesn\'t add unnecessary icons', t => {
	const props = {
	      	label: 'test'
	      },
	      wrapper = shallow(<WorkingButton { ...props } />);

	t.is(wrapper.find(Icon).length, 0);
});