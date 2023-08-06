const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

const arrLength = arr.length;
console.log(arrLength);

const getFirstElement = (array) => array[0];
console.log(getFirstElement(arr));

const getMiddleElement = (array) => array[Math.floor(array.length / 2)];
console.log(getMiddleElement(arr));

const getLastElement = (array) => array[array.length - 1];
console.log(getLastElement(arr));

const mixedDataTypes = ["vansh", 2.314, "IBM", true, false, "React"];
console.log(mixedDataTypes);

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const companiesLength = itCompanies.length;

console.log(itCompanies);
console.log(companiesLength);
console.log(getFirstElement(itCompanies));
console.log(itCompanies[Math.floor(companiesLength / 2)]);
console.log(getLastElement(itCompanies));

const printCompanies = (companies) => companies.forEach((company) => console.log(company));
printCompanies(itCompanies);

const upperCaseCompanies = itCompanies.map((company) => company.toUpperCase());
console.log(upperCaseCompanies);

console.log(itCompanies.join(", "));

const checkCompany = (companyName) => itCompanies.includes(companyName) ? companyName : false;
console.log(checkCompany("Facebook"));

const filterCompaniesWithMoreThanOneO = (companies) => {
  return companies.filter((company) => {
    let count = 0;
    for (let j = 0; j < company.length; j++) {
      if (company[j].toLowerCase() === 'o') {
        count++;
      }
      if (count > 1) {
        return true;
      }
    }
    return false;
  });
};

const result = filterCompaniesWithMoreThanOneO(itCompanies);
console.log(result);

console.log(itCompanies.slice());

console.log(itCompanies.reverse());

const removeFirstCompany = (companies) => {
  companies.shift();
  return companies;
};
console.log(removeFirstCompany(itCompanies));

const removeMiddleCompany = (companies) => {
  const middleIndex = Math.floor(companies.length / 2);
  companies.splice(middleIndex, 1);
  return companies;
};
console.log(removeMiddleCompany(itCompanies));

const removeLastCompany = (companies) => {
  companies.pop();
  return companies;
};
console.log(removeLastCompany(itCompanies));

const removeAllCompanies = (companies) => {
  companies.length = 0;
  return companies;
};
console.log(removeAllCompanies(itCompanies));
