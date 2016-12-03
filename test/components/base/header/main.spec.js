import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Header from 'components/base/header/view';
import { Icon } from 'components/modules';

const defaultProps = {
	navShown  : true,
	logged    : true,
	toggleNav : () => {}
}

const unloggedProps = {
	navShown  : true,
	logged    : false,
	toggleNav : () => {}
}

const hiddenNavProps = {
	navShown  : false,
	logged    : true,
	toggleNav : () => {}
}

const watchedToggleProps = {
	navShown  : false,
	logged    : true,
	toggleNav : sinon.spy()
}

test('It has a toggle sidebar icon', t => {
	const wrapper = shallow(<Header { ...defaultProps } />);

	t.is(wrapper.find(Icon).length, 1);
});

test('It is hidden when not logged in', t => {
	const wrapper = shallow(<Header { ...unloggedProps } />);

	t.false(wrapper.hasClass('is-logged-in'));
});

test('Icon is plus when sidebar is hidden', t => {
	const wrapper = shallow(<Header { ...hiddenNavProps } />);

	t.is(wrapper.find(Icon).props().i, 'plus');
});

test('Icon is minus when sidebar is shown', t => {
	const wrapper = shallow(<Header { ...defaultProps } />);

	t.is(wrapper.find(Icon).props().i, 'minus');
});

test('Icon calls toggleNav when clicked', t => {
	const wrapper = shallow(<Header { ...watchedToggleProps } />);
	wrapper.find(Icon).simulate('click');

	t.true(watchedToggleProps.toggleNav.calledOnce);
});