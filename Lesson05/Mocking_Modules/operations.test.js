const ops = require('./operations');

const ls  = require('./localStorageApi')
jest.mock('./localStorageApi.js')

describe('mocking modules', () => {

  test('local storage not supported', () => {

	ls.isLocalStorageSupported.mockReturnValueOnce(false);

	// Alternatively, can specify a mock implementation as follows:
	// ls.isLocalStorageSupported.mockImplementation(() => false);

	ops.incrementLikes();

	expect(ls.getNumber).not.toHaveBeenCalled();
	expect(ls.saveNumber).not.toHaveBeenCalled();
  });

  test('"likes" not defined in local storage', () => {

	ls.isLocalStorageSupported.mockReturnValueOnce(true);
	ls.getNumber.mockReturnValueOnce(0);

	ops.incrementLikes();

	expect(ls.getNumber).toHaveBeenCalledWith('likes', 0);
	expect(ls.saveNumber).toHaveBeenCalledWith('likes', 1);
  });

  test('"likes" is defined in local storage', () => {

	ls.isLocalStorageSupported.mockReturnValueOnce(true);
	ls.getNumber.mockReturnValueOnce(42);

	ops.incrementLikes();

	expect(ls.getNumber).toHaveBeenCalledWith('likes', 0);
	expect(ls.saveNumber).toHaveBeenCalledWith('likes', 43);
  });
});

