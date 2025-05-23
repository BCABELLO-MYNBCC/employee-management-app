// main.js - handles form submission, fetch requests, etc.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#employeeForm");
  const tableBody = document.querySelector("#employeeTableBody");

  const loadEmployees = async () => {
    const res = await fetch("/api/employees");
    const employees = await res.json();
    tableBody.innerHTML = "";
    employees.forEach(emp => {
      const row = `<tr>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.department}</td>
        <td>${emp.email}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      position: form.position.value,
      department: form.department.value,
      email: form.email.value
    };
    await fetch("/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    form.reset();
    loadEmployees();
  });

  loadEmployees();
});
