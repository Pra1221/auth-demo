const loginButton = document.getElementById("loginBtn");

// ------------------------
// Login
// ------------------------

if (loginButton) {
    loginButton.addEventListener("click", login);
}

function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    const user = users.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!user) {
        errorMessage.textContent = "Invalid username or password.";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    window.location.href = "dashboard.html";

}

// ------------------------
// Current Logged User
// ------------------------

function getCurrentUser() {

    return JSON.parse(localStorage.getItem("loggedInUser"));

}

// ------------------------
// Authentication Check
// ------------------------

function requireLogin() {

    const user = getCurrentUser();

    if (!user) {
        window.location.href = "index.html";
    }

}

// ------------------------
// Authorization Check
// ------------------------

function requireAdmin() {

    const user = getCurrentUser();

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    if (user.role !== "ADMIN") {
        window.location.href = "denied.html";
    }

}

// ------------------------
// Logout
// ------------------------

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";

}

// ------------------------
// Dashboard Information
// ------------------------

function loadDashboard() {

    const user = getCurrentUser();

    if (!user) return;

    document.getElementById("welcomeMessage").textContent =
        "Welcome, " + user.name;

    document.getElementById("role").textContent =
        user.role;

    document.getElementById("authorization").textContent =
        user.authorization;

}

// ------------------------
// User Panel
// ------------------------

function loadUserPanel() {

    const user = getCurrentUser();

    if (!user) return;

    document.getElementById("userName").textContent =
        user.name;

}

// ------------------------
// Admin Panel
// ------------------------

function loadAdminPanel() {

    const user = getCurrentUser();

    if (!user) return;

    document.getElementById("adminName").textContent =
        user.name;

}