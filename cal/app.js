document.addEventListener("DOMContentLoaded", () => {
  let date = new Date();
  const wrapper = document.getElementById("wrapper");
  let currentYear = date.getFullYear();

  console.log(date.getDate());
  const febNumDays = isLeapYear(currentYear);
  function isLeapYear(year) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      return 29;
      console.log("It's a leap year");
    } else {
      return 28;
      console.log("It's not a leap year");
    }
  }

  function daysInYear() {
    if (febNumDays === 29) {
      return 366;
    } else {
      return 365;
    }
  }

  let weeksInYear = daysInYear() / 7;

  const daysInMonth = [31, febNumDays, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  console.log(date.getDay());
  console.log(date.getYear() + 1900);
  console.log(daysInYear());
  console.log(weeksInYear);
  console.log(daysInMonth[1]);
});
