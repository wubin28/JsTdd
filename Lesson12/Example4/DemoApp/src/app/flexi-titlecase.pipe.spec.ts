import { FlexiTitlecasePipe } from './flexi-titlecase.pipe';

describe('FlexiTitlecasePipe', () => {
  
  let pipe: FlexiTitlecasePipe;

  beforeEach(() => {
    pipe = new FlexiTitlecasePipe();
  })

  it('pipe converts to upper title case', () => {
    let result = pipe.transform('ant bat cat', 'upper');
    expect(result).toBe('Ant Bat Cat');
  });

  it('pipe converts to lower title case', () => {
    let result = pipe.transform('ant bat cat', 'lower');
    expect(result).toBe('aNT bAT cAT');
  });

  it('pipe ignores invalid parameter', () => {
    let result = pipe.transform('ant bat cat', 'wibble');
    expect(result).toBe('ant bat cat');
  });
});
