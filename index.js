function validateForm() {
    var fname = document.getElementById("fname").value.trim();
    var email = document.getElementById("email").value.trim();
    var cellnumber = document.getElementById("cellnumber").value.trim();
    var city = document.getElementById("city").value;
    var subject = document.getElementById("subject").value.trim();
    var error = document.getElementById("error");
    
    if (fname === "" || email === "" || cellnumber === "" || subject === "") {
      showError("Please fill out all required fields");
      return false;
    }
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError("Please enter a valid email address");
      return false;
    }
    
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(cellnumber)) {
      showError("Please enter a valid cell number (10 digits)");
      return false;
    }
    
    error.innerHTML = "";
    return true;
  }
  
  function showError(message) {
    var error = document.getElementById("error");
    error.innerHTML = message;
  }
  
  document.getElementById("contactForm").addEventListener("submit", function(event){
    if (!validateForm()) {
      event.preventDefault();
    }
  });