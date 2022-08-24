const Intern = require("../lib/Intern");

it("Can set school to the Intern class", () => {
  const schoolValue = "KU";
  const int = new Intern("school", 1, "test@test.com", schoolValue);
  expect(int.school).toBe(schoolValue);
});

it("getRole() should return 'Intern'", () => {
  const roleValue = "Intern";
  const int = new Intern("intern", 1, "test@test.com", "KU");
  expect(int.getRole()).toBe(roleValue);
});

it("Can get school from getSchool() method", () => {
  const schoolValue = "KU";
  const int = new Intern("intern", 1, "test@test.com", schoolValue);
  expect(int.getSchool()).toBe(schoolValue);
});