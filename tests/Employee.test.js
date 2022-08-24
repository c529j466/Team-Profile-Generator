const Employee = require("../lib/Employee");

it("Can create Employee class", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

it("Can set name to Employee class", () => {
  const name = "Tim";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

it("Can set id to Employee class", () => {
  const idValue = 90;
  const emp = new Employee("ID", idValue);
  expect(emp.id).toBe(idValue);
});

it("Can set email to Employee class", () => {
  const emailValue = "tim@gmail.com";
  const emp = new Employee("Email", 1, emailValue);
  expect(emp.email).toBe(emailValue);
});

it("Can get name from getName() method", () => {
  const nameValue = "Tim";
  const emp = new Employee(nameValue);
  expect(emp.getName()).toBe(nameValue);
});

it("Can get id from getId() method", () => {
  const idValue = 90;
  const emp = new Employee("ID", idValue);
  expect(emp.getId()).toBe(idValue);
});

it("Can get email from getEmail() method", () => {
  const emailValue = "tim@gmail.com";
  const emp = new Employee("Email", 1, emailValue);
  expect(emp.getEmail()).toBe(emailValue);
});

it("getRole() should return 'Employee'", () => {
  const roleValue = "Employee";
  const emp = new Employee("Tim", 1, "tim@gmail.com");
  expect(emp.getRole()).toBe(roleValue);
});