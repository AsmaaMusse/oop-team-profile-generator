const Intern = require("../Intern");

const instance = new Intern("Faris Adel", 982, "farisA@gmail.com", "UCL");

describe("Intern", () => {
  test("should be an Intern", () => {
    const expected = "Intern";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Faris Adel";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected Id", () => {
    const expected = 982;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "farisA@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return expected school", () => {
    const expected = "UCL";
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
