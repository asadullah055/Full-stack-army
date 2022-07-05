const axios = require("axios").default;

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);
  return users;
}
async function* getPostByUser(users) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
    yield posts;
  }
}
getUsers()
  .then(async (users) => {
    const userIterator = await getPostByUser(users);
    console.log((await userIterator.next()).value);
  })
  .catch((e) => {
    console.log(e);
  });
// 125
