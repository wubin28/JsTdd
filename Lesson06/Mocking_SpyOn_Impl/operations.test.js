const ops = require('./operations');
const msg = require('./messaging')
const dt  = require('./datetime')

const infoMock = jest.spyOn(msg, 'info');

describe('spying on functions with implementations', () => {

  beforeEach(() => {    
	jest.spyOn(dt, 'nowString')
	    .mockImplementation(() => '2021-12-03T08:00:00.123Z');
  });

  afterEach(() => {    
	jest.clearAllMocks();
  });
	
  test('simple tests - example 1', () => {
	expect(dt.nowString()).toBe('2021-12-03T08:00:00.123Z');
  });

  test('simple tests - example 2', () => {
	const str = msg.info('Hi!')
	expect(str).toBe('[2021-12-03T08:00:00.123Z] INFO: Hi!');
  });

  test('realistic test', () => {

	ops.divide(10, 20);

	expect(infoMock).toHaveBeenCalledWith('In divide(10, 20)');
	expect(infoMock.mock.results.length).toBe(1);
	expect(infoMock.mock.results[0].value).toBe('[2021-12-03T08:00:00.123Z] INFO: In divide(10, 20)');
  });
});

