const Manager = require("../Manager");

describe("Manager", () => {
  test("should be an Manager", () => {
    const instance = new Manager("Manager");
    const expected = "Manager";
    const actual = instance.getRole();

    expected(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const instance = new Manager({ name: "Catharine Mills" });
    const expected = "Catharine Mills";
    const actual = instance.getName();

    expected(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const instance = new Manager({ id: 624 });
    const expected = "624";
    const actual = instance.getId();

    expected(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const instance = new Manager({ email: "catharine48@gmail.com" });
    const expected = "catharine48@gmail.com";
    const actual = instance.getEmail();

    expected(actual).toEqual(expected);
  });

  test("should return expected officeNumber", () => {
    const instance = new Manager({ officeNumber: "7693" });
    const expected = "7693";
    const actual = instance.getOfficeNumber();

    expected(actual).toEqual(expected);
  });
});
