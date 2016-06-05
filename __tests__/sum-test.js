jest.unmock('../array2d'); // unmock to use the actual implementation of sum

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    const bb = require('../array2d');
    console.log(bb);
    a = new bb(10);
    a[0] = 1;
    a[1] = a[0];
    expect(a.log.length).toBe(2);
  });
});
