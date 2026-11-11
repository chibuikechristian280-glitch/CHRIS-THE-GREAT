const API_URL = "https://jsonplaceholder.org/users";

const grid = document.getElementById("profile-grid");
const status = document.getElementById("status");

async function loadProfiles() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const users = await res.json();
        if (!Array.isArray(users)) throw new Error("Expected an array");

        // Keep ONLY username (from login.username) and email
        const profiles = users
            .map(u => ({
                username: u?.login?.username,
                email: u?.email,
            }))
            .filter(p => p.username && p.email); // drop any incomplete records

        render(profiles);
        status.style.display = "none"; // hide "Loading…"
    } catch (err) {
        status.textContent = `Could not load users: ${err.message}`;
        status.classList.add("error");
    }
}

function render(profiles) {
    grid.innerHTML = profiles
        .map(
            p => `
        <article class="profile-card">
          <div class="avatar">${p.username[0]}</div>
          <h2 class="username">${p.username}</h2>
          <a class="email" href="mailto:${p.email}">${p.email}</a>
        </article>
      `
        )
        .join("");
}

loadProfiles();