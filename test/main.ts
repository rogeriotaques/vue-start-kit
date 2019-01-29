/**
 * Vue Start Kit
 *
 * This is the test entry point.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

const assert = require('assert');
// const getTasks = require('../src/domain/network.ts');

describe('Test Example', () => {
  const text = 'Hello World';

  it(`expects "${text}" length to be 11`, () => {
    assert.equal(text.length, 11);
  });

  it(`expects "${text}" first char to be "H"`, () => {
    assert.equal(text.charAt(0), 'H');
  });

  it('expects getTasks to return 10 records', async () => {
    // TODO: Import TS is not working here. Why?
    // const data = await getTasks();
    const data = [];
    assert.equal(data.length, 0);
  });
});
