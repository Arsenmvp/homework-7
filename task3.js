function getMaxSalary(salaries) {
  let values = Object.values(salaries);
  return values.length ? Math.max(...values) : 0;
}

let salaries = {
  Anna: 300,
  John: 500,
  Mike: 400
};

console.log(getMaxSalary(salaries)); // 500
