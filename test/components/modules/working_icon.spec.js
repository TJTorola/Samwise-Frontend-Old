import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { WorkingIcon, Icon } from 'components/modules';

test('internally uses Icon', t => {
	const wrapper = shallow(<WorkingIcon i="user" />);

	t.is(wrapper.find(Icon).length, 1);
});

test('passes in given classes', t => {
	const wrapper = shallow(<WorkingIcon i="user" className="test-class" />);

	t.true(wrapper.hasClass('test-class'));
});

test('can work', t => {
	const wrapper  = shallow(<WorkingIcon i="user" />),
	      instance = wrapper.instance();

	t.true(instance.render().props.i === 'user');
	instance.work();
	t.true(instance.render().props.i === 'gear');
});

test('can stop', t => {
	const wrapper  = shallow(<WorkingIcon i="user" />),
	      instance = wrapper.instance();

	instance.work();
	t.true(instance.render().props.i === 'gear');
	instance.stop();
	t.true(instance.render().props.i === 'user');
});

test('has spin when working', t => {
	const wrapper  = shallow(<WorkingIcon i="user" />),
	      instance = wrapper.instance();

	instance.work();
	t.regex(instance.render().props.className, /spin/);
})