import test from 'ava';
import reducer from 'reducers/dashboard/nav';

const type   = 'somethingoranother',
      action = { type },
      init   = reducer(undefined, action);

test('inits to true', t => {
	t.true(init);
});

test('toggles between true/false', t => {
	const type   = "TOGGLE_NAV",
	      action = { type },
	      next   = reducer(init, action),
	      last   = reducer(next, action);

	t.false(next);
	t.true(last);
});

test('hides nav', t => {
	const type   = "HIDE_NAV",
	      action = { type },
	      next   = reducer(true, action);

	t.false(next);
});

test('shows nav', t => {
	const type   = "SHOW_NAV",
	      action = { type },
	      next   = reducer(false, action);

	t.true(next);
})