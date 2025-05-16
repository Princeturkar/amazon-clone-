document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;

  if (password !== repassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Simulate registration
  alert(`Welcome, ${name}! Your account has been created.`);
  // In real app: Send data to backend (e.g., via fetch/AJAX)
});
