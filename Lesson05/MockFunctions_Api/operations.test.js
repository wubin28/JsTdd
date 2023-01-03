const ops = require('./operations');
const ls  = require('./localStorageApi')

describe('mock function techniques', () => {

  test('local storage not supported', () => {

	ls.isLocalStorageSupported = jest.fn(() => false)
	ls.getNumber = jest.fn(() => {})
	ls.saveNumber = jest.fn(() => {})

	ops.incrementLikes()

	expect(ls.isLocalStorageSupported).toHaveBeenCalled()
	expect(ls.getNumber).not.toHaveBeenCalled()
	expect(ls.saveNumber).not.toHaveBeenCalled()
  });

  test('"likes" not defined in local storage', () => {

	ls.isLocalStorageSupported = jest.fn(() => true)
	ls.getNumber = jest.fn(() => 0)
	ls.saveNumber = jest.fn(() => {})

	ops.incrementLikes()

	expect(ls.isLocalStorageSupported).toHaveBeenCalled()
	expect(ls.getNumber).toHaveBeenCalledWith('likes', 0)
	expect(ls.saveNumber).toHaveBeenCalledWith('likes', 1)
  });

  test('"likes" is defined in local storage', () => {

	ls.isLocalStorageSupported = jest.fn(() => true)
	ls.getNumber = jest.fn(() => 42)
	ls.saveNumber = jest.fn(() => {})

	ops.incrementLikes()

	expect(ls.isLocalStorageSupported).toHaveBeenCalled()
	expect(ls.getNumber).toHaveBeenCalledWith('likes', 0)
	expect(ls.saveNumber).toHaveBeenCalledWith('likes', 43)
  });
});

