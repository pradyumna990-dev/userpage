document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "https://bookandbits.in/";
    } else {
      alert("Incorrect username or password.");
    }
  });

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = signupForm.querySelector('input[type="text"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign up successful! You can now log in.");
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  switchToSignup.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  switchToLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });
});
