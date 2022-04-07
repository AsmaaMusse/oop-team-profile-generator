const Employee = require("../Employee");

const instance = new Employee("James Smith", 575, "james.smith07@gmail.com");

describe("Employee", () => {
  test("should be an Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "James Smith";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const expected = 575;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "james.smith07@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
