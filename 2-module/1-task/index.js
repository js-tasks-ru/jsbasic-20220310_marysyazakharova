function sumSalary(salaries) {
  let Sum = 0;
  for (let key in salaries) {
    let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);
    if (isSalary) {
     Sum += salaries[key]; 
    }
  }
return Sum;
}
