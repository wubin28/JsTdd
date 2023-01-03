const ops = require('./operations');
const msg = require('./messaging')

const infoMock  = jest.spyOn(msg, 'info');
const warnMock  = jest.spyOn(msg, 'warn');
const errorMock = jest.spyOn(msg, 'error');

describe('spying on functions', () => {

  afterEach(() => {    
	jest.clearAllMocks();
  });
	
  test('spying on a function - example 1', () => {

	ops.divide(10, 20);
	
	expect(infoMock).toHaveBeenCalledWith('In divide(10, 20)');
	expect(warnMock).not.toHaveBeenCalled();
	expect(errorMock).not.toHaveBeenCalled();
  });

  test('spying on a function - example 2', () => {

	ops.divide(10, 0);
	
	expect(warnMock).toHaveBeenCalledWith('In divide(10, 0)');
	expect(infoMock).not.toHaveBeenCalled();
	expect(errorMock).not.toHaveBeenCalled();
  });
});

