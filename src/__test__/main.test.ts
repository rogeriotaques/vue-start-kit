/**
 * Vue Start Kit
 *
 * This is the test entry point.
 * It tests general stuff.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import { getTasks } from '~/domain/network';

describe('Test Example', () => {
  const text = 'Hello World';

  it(`expects "${text}" length to be 11`, () => {
    expect(text.length).toBe(11);
  });

  it(`expects "${text}" first char to be "H"`, () => {
    expect(text.charAt(0)).toBe('H');
  });

  it('expects getTasks to return 5 records', async (done) => {
    try {
      const data = await getTasks();
      expect(data.length).toBe(5);
      done();
    } catch (error) {
      done(error);
    }
  });
});
