async function getUsernames() {
  const res = await fetch('https://jsonplaceholder.org/users');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const users = await res.json();

  return users.map(user => user.login.username);
}

// Use it:
getUsernames().then(usernames => {
  console.log(usernames);
}).catch ;