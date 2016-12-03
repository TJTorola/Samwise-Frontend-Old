import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

import { WorkingIcon, ConfirmedIcon } from 'components/modules';

test('internally uses WorkingIcon', t => {
	const wrapper = shallow(<ConfirmedIcon i="user" />);

	t.is(wrapper.find(WorkingIcon).length, 1);
});

test('passes in given classes', t => {
	const wrapper = shallow(<ConfirmedIcon i="user" className="test-class" />);

	t.true(wrapper.hasClass('test-class'));
});

test('exposes workingIcon\'s work', t => {
	sinon.spy(WorkingIcon.prototype, 'work');
	const instance = TestUtils.renderIntoDocument(<ConfirmedIcon i="user" />);

	instance.work();
	t.true(WorkingIcon.prototype.work.calledOnce);
	WorkingIcon.prototype.work.restore();
});

test('allows for marking finished', t => {
	const instance = TestUtils.renderIntoDocument(<ConfirmedIcon i="user" />);

	instance.finished();
	t.true(instance.render().props.i === 'check');
});

test('allows for marking failed', t => {
	const instance = TestUtils.renderIntoDocument(<ConfirmedIcon i="user" />);

	instance.failed();
	t.true(instance.render().props.i === 'times');
});