import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

import { Button } from 'components/modules';

test('It passes in onClick', t => {
	const onClick = sinon.spy(() => {}),
	      props = {
	      	onClick,
	      	label: 'test'
	      },
	      wrapper = shallow(<Button { ...props } />);

	wrapper.simulate('click');
	t.true(onClick.calledOnce);
});

test('It displays given label', t => {
	const props = {
	      	onClick: () => {},
	      	label: 'test'
	      },
	      wrapper = shallow(<Button { ...props } />);

	t.is(wrapper.text(), 'test');
});