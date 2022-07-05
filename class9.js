// Pure Function + side Effects +Immutability
// Higher order function
// Function scope + closer + Hoisting
// Callback function
// IIFE
// Pure Function

/* function sum(a,b){
    return a +b
}
 */
/* const arr = [1, 2, 3, 4];
function add(data) {
  return arr.push(data);
}
console.log(add(arr)); */

/*============== Higher order function ============= */

// Function can be passed as an argument.
/* function randomNumber(max, cb) {
  const rand1 = Math.round(Math.random() * max);
  const rand2 = Math.round(Math.random() * max);
  return cb(rand1, rand2);
}
randomNumber(2, (ran1, ran2) => {
  console.log(ran1 % ran2);
}); */

// Function can be returned from another function.
function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
  };
}
// const sqr = power(2);
// const cub = power(3);
// const paw8 = power(8);
// console.log(sqr(5));
// console.log(power(2)(9));

// call back hell
/**
 * 1. find user by username
 * 2. find post by userId
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the latest commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */
function get(path, cb) {
  const data = {}; // // somehow process it
  cb();
}
function getUserNameFromComment(username) {
  get(`/users?username=${username}`, (user) => {
    get(`/posts?user_id=${user.id}`, (post) => {
      get(`/comments?post_id=${post[0].id}`, (comment) => {
        get(`/users?username=${comment[0].username}`, (user) => {
          console.log(user);
        });
      });
    });
  });
}

getUserNameFromComment("asadullah");
