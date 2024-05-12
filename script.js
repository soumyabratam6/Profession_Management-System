document.addEventListener("DOMContentLoaded", function () {
  const employeeForm = document.getElementById("employeeForm");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");
  const employeeList = document.getElementById("employeeList");
  const employZero = document.getElementById("zeroemp");
  let employees = [];

  function renderEmployees() {
    employeeList.innerHTML = "";
    employees.forEach((employee) => {
      const employeeDiv = document.createElement("div");
      employeeDiv.innerHTML = `
            <div style="display:flex; ">
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; display:flex;justify-content:space-around; width:539px;height:15px">
            <p><strong>Name:</strong> ${employee.Name}</p>
            <p><strong>Profession:</strong> ${employee.Profession}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
            </div>
            <button style="padding: 5px 10px; background-color:#FFFFFF;color: black; border: 1px solid #ccc ; margin-left:25px;cursor: pointer; width:110px;height:40px; border-radius: 20px;" onclick="deleteEmployee(${employee.id})">Delete</button>
            </div>
            `;
      employeeList.appendChild(employeeDiv);
    });
  }
  employeeForm.addEventListener("submit", function (event) {
    //console.log("clicked");
    event.preventDefault();
    const name = document.getElementById("name").value;
    //console.log(name);
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    const errorDiv = document.getElementById("errorMessage");
    errorDiv.style.color = "red";
    if (!name || !profession || !age) {
      showError(
        "Error : Please Make sure All the fields are filled before adding in an employee !"
      );
      return;
    }
    employZero.style.display = "none";
    const id = generateId();
    const employee = { id, Name:name, Profession:profession, age: parseInt(age) };
    //console.log(employee);
    employees.push(employee);

    showSuccess("Success : Employee Added!");

    renderEmployees();
    employeeForm.reset();

    function generateId() {
      return Math.floor(Math.random() * 1000000);
    }
  });
  window.deleteEmployee = function (id) {
    console.log(id);
    employees = employees.filter((employee) => employee.id !== id);
    renderEmployees();
  };
  window.renderEmployees = renderEmployees;
  function showError(message) {
    errorMessage.innerText = message;
    errorMessage.classList.add("error");
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "15px";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
      errorMessage.classList.remove("error");
    }, 3000);
  }

  function showSuccess(message) {
    successMessage.innerText = message;
    successMessage.classList.add("success");
    successMessage.style.color = "#43FF78";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
      successMessage.classList.remove("success");
    }, 3000);
  }
});
