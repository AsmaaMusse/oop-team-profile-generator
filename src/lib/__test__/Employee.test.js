const Employee = require("../Employee");

describe("Employee", () => {
  test("should be an Employee", () => {
    const instance = new Employee("Employee");
    const expected = "Employee";
    const actual = instance.getRole();

    expected(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const instance = new Employee({ name: "James Smith" });
    const expected = "James Smith";
    const actual = instance.getName();

    expected(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const instance = new Employee({ id: 575 });
    const expected = "575";
    const actual = instance.getId();

    expected(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const instance = new Employee({ email: "james.smith07@gmail.com" });
    const expected = "james.smith07@gmail.com";
    const actual = instance.getEmail();

    expected(actual).toEqual(expected);
  });
});
