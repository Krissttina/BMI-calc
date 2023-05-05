const radioMale = document.querySelector(".male");
const radioFemale = document.querySelector(".female");

const heightPre = document.querySelector(".height");
const weight = document.querySelector(".weight");

const result = document.querySelector(".result");

const res = document.getElementById("res");

let condition = '';

document.getElementById("btn").addEventListener("click", () => {
  let height = (Number(heightPre.value) / 100) * 2;
  let bmi = Number(weight.value) / height;

    

  if (radioFemale.checked == true) {
    res.innerHTML = bmi.toFixed(2);
    console.log(height*2);
  } else {
    res.innerHTML = bmi.toFixed(2);
    console.log(Number(weight.value));
  }

  // USC Units:
// BMI = 703 × 	mass (lbs) / height2 (in) = 703 × 160 / 702 = 22.96 	kg /m2

// SI, Metric Units:
// BMI = 	mass (kg) / height2 (m) = 72.57 / 1.782 = 	22.90	 kg / m2

//check for condition

// Severe Thinness	< 16	
// Moderate Thinness	16 - 17	
// Mild Thinness	17 - 18.5	
// Normal	18.5 - 25	
// Overweight	25 - 30	
// Obese Class I	30 - 35
// Obese Class II	35 - 40
// Obese Class III	> 40


if(bmi < 16){
  condition = 'Underweigh';
}else if(bmi == 16 || bmi < 17){
  condition = 'Mild Thinness';
}else if(bmi == 17 || bmi < 18.50){
  condition = 'Normal';
}else if(bmi == 18.50 || bmi < 25){
  condition = 'Normal';
}else if(bmi == 25 || bmi < 30){
  condition = 'Overweight';
}else if(bmi == 30 || bmi < 35){
  condition = 'Obese Class I';
}else if(bmi == 35 && bmi < 40){
  condition = 'Obese Class II';
}else if(bmi > 40){
  condition = 'Obese Class III';
}

result.innerHTML = `Result: ${condition}`
});