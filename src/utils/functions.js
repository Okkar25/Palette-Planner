export const formatDate12HourTimezone = () => {
  const date = new Date();

  // east way
  const defaultTime = date.toLocaleTimeString();
  const defaultDate = date.toLocaleDateString();

  // Time
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  const strHours = hours < 10 ? "0" + hours : hours;
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  const strSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Date
  const month = date.getMonth() + 1;
  const currentDate = date.getDate();
  const year = date.getFullYear();
  const dayIndex = date.getDay();

  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = daysArr[dayIndex].slice(0, 3);

  const strMonth = month < 10 ? "0" + month : month;
  const strDate = currentDate < 10 ? "0" + currentDate : currentDate;

  // return defaultTime + " " + defaultDate;
  return `${day} ${strHours}:${strMinutes}:${strSeconds} ${ampm} ${strMonth}/${strDate}/${year}`;
};
