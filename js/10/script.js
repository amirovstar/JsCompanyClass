'use strict';
class Company {
  constructor(companyName, locationName) {
    this.companyName = companyName;
    this.locationName = locationName;
  }

  employee = [[], [], []];

  table() {
    let body = document.getElementById('tbody');
    let tr = '';
    const employeeArr = this.employee;
    for (let i = 0; i < employeeArr[0].length; i++) {
      tr += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${employeeArr[0][i]}</td>
          <td>${employeeArr[1][i]}</td>
          <td>${employeeArr[2][i]}</td>
        </tr>
      `;
    }
    body.innerHTML = tr;
  }

  addData() {
    let name = document.getElementById('name').value;
    let position = document.getElementById('position').value;
    let salary = document.getElementById('salary').value;

   
    if (!name || !position || !salary) {
      alert('Please fill in all fields');
      return;
    }

    const employeeArr = this.employee;
    employeeArr[0].push(name);
    employeeArr[1].push(position);
    employeeArr[2].push(salary);
    console.log(employeeArr);
    this.table();

    
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('salary').value = '';

   //#region BU HISSEDE KOMEK ALMISAM
    let modal = document.getElementById('exampleModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';

    let backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops[0]) {
      backdrops[0].outerHTML = '';
    }

    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    //#endregion
  }
}


let loc = document.getElementById('loc');

function Add() {
  if (loc.value === '1') ca.addData();
  else if (loc.value === '2') na.addData();
}

const ca = new Company('Code Academy', '28 may');
const na = new Company('Code Academy', 'Nizami');

document.getElementById('company').innerHTML = ca.companyName;
document.getElementById('location').innerHTML = ca.locationName;


function updateSelectOptions() {
  let loc = document.getElementById('loc');
  loc.innerHTML = '';

  let option = new Option('Open this select menu', '', true, true);
  option.disabled = true;
  loc.add(option);

  
  const companies = [ca, na];
  companies.forEach((company, index) => {
    option = new Option(company.locationName, index + 1);
    loc.add(option);
  });
}


function updateCompanyName() {
  let loc = document.getElementById('loc');
  let selectedLocation = loc.options[loc.selectedIndex].text;
  document.getElementById('location').innerHTML = selectedLocation;
}

updateSelectOptions();


loc.onchange = updateCompanyName;
