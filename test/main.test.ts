/**
 * Vue Start Kit
 *
 * This is the test entry point.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import assert from 'assert';
import { getTasks } from '../src/domain/network';

describe('Test Example', () => {
  const text = 'Hello World';

  it(`expects "${text}" length to be 11`, () => {
    assert.equal(text.length, 11);
  });

  it(`expects "${text}" first char to be "H"`, () => {
    assert.equal(text.charAt(0), 'H');
  });

  it('expects getTasks to return 5 records', (done) => {
    getTasks()
      .then((data) => {
        assert.equal(data.length, 5);
        done();
      })
      .catch((error) => done(error));
  });
});
