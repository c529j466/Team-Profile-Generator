const Engineer = require("../lib/Engineer");

it("Should set github to Engineer", () => {
  const githubValue = "GitHub";
  const eng = new Engineer("Git", 1, "test@test.com", githubValue);
  expect(eng.github).toBe(githubValue);
});

it("getRole() should return 'Engineer'", () => {
  const roleValue = "Engineer";
  const eng = new Engineer("Engineer", 1, "test@test.com", "GitHub");
  expect(eng.getRole()).toBe(roleValue);
});

it("Can get GitHub username from getGithub() method", () => {
  const githubValue = "GitHubU";
  const eng = new Engineer("Git", 1, "test@test.com", githubValue);
  expect(eng.getGithub()).toBe(githubValue);
});