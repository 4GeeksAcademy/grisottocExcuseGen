/* eslint-disable */

window.onload = function() {
  function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function generateRandomExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let excuse = `${getRandomElement(who)} ${getRandomElement(
      action
    )} ${getRandomElement(what)} ${getRandomElement(when)}`;

    document.getElementById("excuse").innerHTML = excuse;
  }

  generateRandomExcuse();
};
