const radioMale = document.querySelector(".male");
const radioFemale = document.querySelector(".female");

const height = document.querySelector(".height");
const weight = document.querySelector(".weight");

const result = document.querySelector(".result");

document.getElementById("btn").addEventListener("click", () => {
    let bmi = Number(height.value) / Number(weight.value);

    result.innerHTML = `Result: ${bmi.toFixed(2)}`

  if (radioFemale.checked == true) {
    console.log(bmi);
  } else {
    console.log(bmi);
  }
});

// divides an adult's weight in kilograms (kg) 
//by their height in metres (m) squared