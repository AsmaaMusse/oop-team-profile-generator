const Intern = require("../Intern");

describe("Intern", () => {
  test("should be an Intern", () => {
    const instance = new Intern("Intern");
    const expected = "Intern";
    const actual = instance.getRole();

    expected(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const instance = new Intern({ name: "Faris Adel" });
    const expected = "Faris Adel";
    const actual = instance.getName();

    expected(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const instance = new Intern({ id: 982 });
    const expected = "982";
    const actual = instance.getId();

    expected(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const instance = new Intern({ email: "farisA@gmail.com" });
    const expected = "farisA@gmail.com";
    const actual = instance.getEmail();

    expected(actual).toEqual(expected);
  });

  test("should return expected school", () => {
    const instance = new Intern({ school: "UCL" });
    const expected = "UCL";
    const actual = instance.getSchool();

    expected(actual).toEqual(expected);
  });
});
