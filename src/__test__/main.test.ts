import { getTasksFromApi } from '../domain/network';

describe('Test Example', () => {
  const text = 'Hello World';

  it(`expects "${text}" length to be 11`, () => {
    expect(text.length).toBe(11);
  });

  it(`expects "${text}" first char to be "H"`, () => {
    expect(text.charAt(0)).toBe('H');
  });

  it('expects getTasksFromApi to return 5 records', async () => {
    try {
      const data = await getTasksFromApi();
      expect(data.length).toBe(5);
    } catch (error) {
      expect(error).toMatch('error');
    }
  });

  // it('expects to fail', () => {
  //   expect(true).toBe(false);
  // });
});
