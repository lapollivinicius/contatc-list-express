function applyTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(savedTheme);
  if (document.body) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(savedTheme);
  }
  localStorage.setItem("theme", savedTheme);
}

function changeTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(newTheme);
  document.body.classList.remove("light", "dark");
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
}

applyTheme();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyTheme);
}

function OpenComments(postElement) {
  const comments = postElement.nextElementSibling;
  if (comments) {
    comments.classList.toggle("active");
  }
}

function togglePassword(event) {
  event.preventDefault();
  const inputPassword = document.getElementById("password");
  if (password.type === "password") {
    inputPassword.type = "text";
    event.target.innerHTML = "HIDDEN";
  } else if (password.type === "text") {
    inputPassword.type = "password";
    event.target.innerHTML = "SEE";
  }
  password.type = type;
}
