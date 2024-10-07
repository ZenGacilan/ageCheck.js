// ageCheck.js

function checkAge() {
  const age = parseInt(prompt("20:"));

  if (age < 13) {
    console.log("You are a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
  } else {
    console.log("You are an adult.");
  }
}

checkAge(20);
