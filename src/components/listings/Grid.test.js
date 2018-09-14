import data from '../../data/courses';

// Numbers
const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// Strings
const dataTest = data[0].title;

test('That there is a JS in this title', () => {
  expect(dataTest).toMatch('JS');
});

test('The title contains React', () => {
  expect(dataTest).toContain('React');
});

// Arrays
const data2 = ['React Native', 'MeteorJS'];

test('That the array mentions React Native', () => {
  expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2));
});

// Objects
test('The first course should have the property of Title', () => {
  expect(data[0]).toHaveProperty('title');
});

test('The first course should have a view number of "31,266"', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
});

