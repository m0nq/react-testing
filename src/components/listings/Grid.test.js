import data from '../../data/courses';

const numItems = data.length;

describe('Numbers tests', () => {
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

describe('Strings test', () => {
  const dataTest = data[0].title;

  test('That there is a JS in this title', () => {
    expect(dataTest).toMatch('JS');
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

describe('Array tests', () => {
  const data2 = ['React Native', 'MeteorJS'];

  test('That the array mentions React Native', () => {
    expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2));
  });
});

describe('Object testing', () => {
  test('The first course should have the property of Title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course should have a view number of "31,266"', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
