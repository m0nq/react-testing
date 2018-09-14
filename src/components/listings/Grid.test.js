import data from '../../data/courses';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('That there is a JS in this title', () => {
  expect(dataTest).toMatch('JS');
});

test('The title contains React', () => {
  expect(dataTest).toContain('React');
});
