const Engineer = require("../Engineer");

const instance = new Engineer(
  "Micheal Jones",
  547,
  "micheal.jones@gmail.com",
  "MichealJ"
);

describe("Engineer", () => {
  test("should be an Engineer", () => {
    const expected = "Engineer";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Micheal Jones";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const expected = 547;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "micheal.jones@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return the expected github", () => {
    const expected = "MichealJ";
    const actual = instance.getGithub();

    expect(actual).toEqual(expected);
  });
});
