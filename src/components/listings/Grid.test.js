import data from "../../data/courses.json";

const numItems = data.length;

describe("Number test", () => {
  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });

  test("Number of items to be greater than or equal 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;
describe("String tests", () => {
  test("There is a JS in index 0 element", () => {
    expect(dataTest).toMatch(/JS/);
  });

  test("There is a React in index 0 element", () => {
    expect(dataTest).toContain("React");
  });
});

// Array
const data2 = ["React Native", "React"];

describe("Arrays an Object test", () => {
  test("The list of course contains React Native and React", () => {
    expect(["React Native", "React", "MetroJs"]).toEqual(
      expect.arrayContaining(data2)
    );
  });

  // Object
  test("The first course should have a property of title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course should have a property of title an value of 31,266", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
