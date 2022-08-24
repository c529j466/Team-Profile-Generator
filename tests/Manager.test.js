const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("Can set office number to manager class ", () => {
  const officeValue = 99;
  const man = new Manager("manager", 1, "test@test.com", officeValue);
  expect(man.officeNumber).toBe(officeValue);
});

it("should use getRole() to return 'Manager'", () => {
  const roleValue = "Manager";
  const man = new Manager("manager", 1, "test@test.com", 100);
  expect(man.getRole()).toBe(roleValue);
});

it("Can get office number rom getOffice() method", () => {
  const officeValue = 99;
  const man = new Manager("manager", 1, "test@test.com", officeValue);
  expect(man.getOfficeNumber()).toBe(officeValue);
});