function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");

  if (email && pass) {
    msg.style.color = "lightgreen";
    msg.innerText = "Login successful (Demo)";
  } else {
    msg.style.color = "red";
    msg.innerText = "Enter email & password";
  }
}
