/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
  let whoRand = Math.floor(Math.random() * who.length);
  let actionRand = Math.floor(Math.random() * action.length);
  let whatRand = Math.floor(Math.random() * what.length);
  let whenRand = Math.floor(Math.random() * when.length);

  let excuseH1 = document.getElementById("excuse");
  let newexcuse =
    who[whoRand] +
    " " +
    action[actionRand] +
    " " +
    what[whatRand] +
    " " +
    when[whenRand];
  excuseH1.textContent = newexcuse;
};
 