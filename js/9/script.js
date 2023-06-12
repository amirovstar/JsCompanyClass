let marka = ["Bmw", "Opel", "Ford", "Kia"];

let model = [
  ["x5", "m4", "m5"],
  ["astra", "vectra"],
  ["fusion", "focus"],
  ["optima", "rio"],
];
function check() {
  let num = document.getElementById("bm");
  let acc = `<option disabled selected value=''>Marka Select</option>`;
  for (let i = 0; i < marka.length; i++) {
    acc += `<option  value="${i}">${marka[i]}</option> `;
  }
  num.innerHTML = acc;
}

check();
function selected(value) {
  let val = document.getElementById("op");
  let acc = `<option disabled selected value=''>Model Select</option>`;
  for (let j = 0; j < model[value].length; j++) {
    console.log(model[value][j]);
    acc += `<option  value="${j}">${model[value][j]}</option> `;
  }
  val.innerHTML = acc;
}
