// registration.js

document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const course = document.getElementById("course").value;
  
    // Save to sessionStorage
    sessionStorage.setItem("fullName", `${fname} ${lname}`);
    sessionStorage.setItem("course", course);
  
    // Redirect to confirmation
    window.location.href = "display.html";
  });
  