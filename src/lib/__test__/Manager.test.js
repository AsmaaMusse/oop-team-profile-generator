const Manager = require("../Manager");

const instance = new Manager(
  "Catharine Mills",
  624,
  "catharine48@gmail.com",
  7693
);

describe("Manager", () => {
  test("should be an Manager", () => {
    const expected = "Manager";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Catharine Mills";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const expected = 624;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "catharine48@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return expected officeNumber", () => {
    const expected = 7693;
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
