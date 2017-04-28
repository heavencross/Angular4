import { EntitiesFilterPipe } from './entities-filter.pipe';

describe('EntitiesFilterPipe', () => {
  let pipe, inp;
  
  beforeEach(() => {
    pipe = new EntitiesFilterPipe();
    inp = [{'leoi':'a'}, {'leoi':'ba'}, {'leoi':'cb'}, {'leoi':'dx'}];
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('transform [a, ba, cb, dx] to [a, ba] with a', () => {
    expect(pipe.transform(inp, 'a').length).toEqual(2);
  });
  
  it('transform [a, ba, cb, dx] to [ba] with ba', () => {
    expect(pipe.transform(inp, 'ba').length).toEqual(1);
  });
});
