const users = ["admin", "editor"];

for (const role of users) {
  const landingPage = `/${role}/dashboard`;
  console.log(role, landingPage);
}