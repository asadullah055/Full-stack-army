/**
 * * Name: Human_Lifecycle
 * * Param: human_name
 * * :human_name, awake from sleep
 * * :human_name, go to washroom
 * * :human_name, take breakfast
 * * :human_name, go to school/college/office
 * * :human_name, Return from office
 * * :human_name, Take dinner
 * * :human_name", Go to sleep
 */

/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */
function sleep(name) {
  console.log(`${name} is sleep`);
}
/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */
function awake(name) {
  console.log(`${name} is awake`);
}
/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */
function eat(name, time) {
  console.log(`${name} is taking ${time}`);
}
/**
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */
function walk(name, destination) {
  console.log(`${name} is walking ${destination}`);
}
/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */
function study(name) {
  console.log(`${name} is study}`);
}
/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */
function work(name) {
  console.log(`${name} is working}`);
}
/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */
function Job_Holder_Lifecycle(name) {
  awake(name);
  eat(name, "Breakfast");
  walk(name, "office");
  work(name);
  eat(name, "Lunch");
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}
console.log();

// function composition
// 1.25.00
