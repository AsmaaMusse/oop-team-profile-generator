const Engineer = require("../Engineer");

describe("Engineer", () => {
  test("should be an Engineer", () => {
    const instance = new Engineer("Engineer");
    const expected = "Engineer";
    const actual = instance.getRole();

    expected(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const instance = new Engineer({ name: "Micheal Jones" });
    const expected = "Micheal Jones";
    const actual = instance.getName();

    expected(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const instance = new Engineer({ id: 547 });
    const expected = "547";
    const actual = instance.getId();

    expected(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const instance = new Employee({ email: "micheal.jones@gmail.com" });
    const expected = "micheal.jones@gmail.com";
    const actual = instance.getEmail();

    expected(actual).toEqual(expected);
  });

  test("should return the expected github", () => {
    const instance = new Engineer({ github: MichealJ });
    const expected = "MichealJ";
    const actual = instance.getGithub();

    expected(actual).toEqual(expected);
  });
});
