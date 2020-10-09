import { formatDate, rangeDate, getLongestPeriod, groupByProjectId } from "./helpers";

export const readLines = (lines) => {
  let arrayOfEmployees = [];
  let projectIds = new Set();
  let groupEmployees;
  let result;
  lines.forEach((element) => {
    let employee = element.split(", ");
    let employeeObject = {
      employeeId: employee[0],
      projectId: parseInt(employee[1]),
      dateFrom: employee[2],
      dateTo: employee[3],
    };
    arrayOfEmployees.push(employeeObject);
    projectIds.add(parseInt(employee[1]));
  });

  arrayOfEmployees.pop();
  groupEmployees = groupByProjectId(arrayOfEmployees, "projectId");
  result = getResult(groupEmployees);
  return result;
  
};


// return result object with team members longest work
const getResult = (result) => {
  let arrayOfEmployee = [];
  let employeeObject = {};
  const keys = Object.keys(result);
  keys.forEach((element) => {
    let empl1 = result[element][0].employeeId;
    let empl2 = result[element][1].employeeId;
    let date1Start = formatDate(result[element][0].dateFrom);
    let date2Start = formatDate(result[element][1].dateFrom);
    let date1End = formatDate(result[element][0].dateTo);
    let date2End = formatDate(result[element][1].dateTo);

    let days = rangeDate(date1Start, date2Start, date1End, date2End);
    employeeObject = {
      empl1: empl1,
      empl2: empl2,
      projectId: element,
      daysWorked: days,
    };
    arrayOfEmployee.push(employeeObject);
  });

  let data = getLongestPeriod(arrayOfEmployee);
  return data;
};

