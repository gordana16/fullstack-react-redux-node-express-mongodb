import moment from "moment";

export const getRangeOfDates = (firstDay, lastDay, dateFormat = "Y/MM/DD") => {
  const daysArr = [];
  let offDay = moment(firstDay, dateFormat);
  const mLastDay = moment(lastDay, dateFormat);
  while (offDay <= mLastDay) {
    daysArr.push(offDay.format(dateFormat));
    offDay.add(1, "day");
  }
  return daysArr;
};

//input date is string
export const dateToUTC = (sDate, dateFormat = "Y/MM/DD") => {
  return moment.utc(sDate, dateFormat).format();
};
