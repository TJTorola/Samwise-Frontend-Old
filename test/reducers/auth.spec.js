import test from 'ava';
import reducer from 'reducers/auth';

test('initializes falsy', t => {
	const type   = "whoknows",
	      action = { type },
	      next   = reducer(undefined, action);

	t.falsy(next);
});

test('sets new auth token', t => {
	const type   = "SET_AUTH",
	      token  = "IMATOKEN!",
	      action = { type, token },
	      next   = reducer(undefined, action);

	t.deepEqual(next, token);
});

