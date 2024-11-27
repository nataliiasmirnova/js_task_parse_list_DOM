'use strict';

// Working with data
// Making array from tag nodes
const dataList = Array.from(document.querySelectorAll('li'));

//  Function to convert USD to numbers
function convertation(arg) {
  return parseFloat(arg.replace(/[$,]/g, ''));
}

// Getting sorted list
const sortedItems = dataList.sort((a, b) => {
  const salaryA = convertation(a.dataset.salary);
  const salaryB = convertation(b.dataset.salary);

  return salaryB - salaryA;
});

// Reset the main list
const list = document.querySelector('ul');

sortedItems.forEach((item) => list.appendChild(item));
