// format and return  date
export const formatDate = (date) => {
  if (date === "NULL") {
    date = new Date();
  } else {
    date = new Date(date);
  }
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let fullDate = year + "-" + month + "-" + day;

  return fullDate;
};

// check team members work period is overlapped
export const rangeDate = (dateStart1, dateStart2, dateEnd1, dateEnd2) => {
  let startDate;
  let endDate;
  dateStart1 = new Date(dateStart1);
  dateEnd1 = new Date(dateEnd1);

  dateStart2 = new Date(dateStart2);
  dateEnd2 = new Date(dateEnd2);
  if (
    dateStart1.getTime() <= dateEnd2.getTime() &&
    dateStart2.getTime() <= dateEnd1.getTime()
  ) {
    if (dateStart1.getTime() <= dateStart2.getTime()) {
      startDate = dateStart2;
    } else {
      startDate = dateStart1;
    }
    if (dateEnd1.getTime() <= dateEnd2.getTime()) {
      endDate = dateEnd1;
    } else {
      endDate = dateEnd2;
    }
    let commonDays = calcDays(startDate, endDate);
    return commonDays;
  }
  return 0;
};

// calculate days between two dates
const calcDays = (startDate, endDate) => {
  let dateStart = new Date(startDate);
  let dateEnd = new Date(endDate);
  var difference1 = dateEnd.getTime() - dateStart.getTime();
  return difference1 / (1000 * 60 * 60 * 24);
};

// find longest work period between all team members
export const getLongestPeriod = (array) => {
  const value = Math.max.apply(
    Math,
    array.map((obj) => {
      return obj.daysWorked;
    })
  );
  let longestObject = array.find((object) => {
    return object.daysWorked === value;
  });
  return longestObject;
};

// group team members
export const groupByProjectId = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};
