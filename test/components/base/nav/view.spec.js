import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Nav from 'components/base/nav/view';
import Header from 'components/base/nav/header';
import Menu from 'components/base/nav/menu';

const defaultProps = {
	expanded : true,
	logged   : true,
}

const unloggedProps = {
	expanded : true,
	logged   : false
}

const retractedProps = {
	expanded : false,
	logged   : true
}

test('It is shown when logged in', t => {
	const wrapper = shallow(<Nav { ...defaultProps } />);

	t.true(wrapper.hasClass('is-logged-in'));
});

test('It is hidden when not logged in', t => {
	const wrapper = shallow(<Nav { ...unloggedProps } />);

	t.false(wrapper.hasClass('is-logged-in'));
});

test('It includes a header', t => {
	const wrapper = shallow(<Nav { ...defaultProps } />);

	t.is(wrapper.find(Header).length, 1);
});

test('It expands', t => {
	const wrapper = shallow(<Nav { ...defaultProps } />);

	t.false(wrapper.hasClass('is-retracted'));
});

test('It retracts', t => {
	const wrapper = shallow(<Nav { ...retractedProps } />);

	t.true(wrapper.hasClass('is-retracted'));
});
