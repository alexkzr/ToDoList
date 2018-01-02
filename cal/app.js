document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("wrapper");
  let date = new Date();
  console.log(date.getDate());
  const febNumDays = 0;
  function isLeapYear(year) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      febNumberOfDays = 29;
      console.log("It's a leap year");
    } else {
      febNumberOfDays = 28;
      console.log("It's not a leap year");
    }
  }

  isLeapYear(2016);

  function daysInYear() {
    if (febNumDays === 29) {
      return 366;
    } else {
      return 365;
    }
  }

  function userYear() {
    const input = document.createElement("input");
    input.placeholder = "Enter your year";
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    wrapper.appendChild(input);
    wrapper.appendChild(submit);

    submit.addEventListener("click", () => {
      const userInput = input.value;
      return isLeapYear(userInput);
    });
  }

  userYear();

  function weeksInYear() {
    return daysInYear / 7;
  }

  const daysInMonth = [
    31,
    isLeapYear(),
    30,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
    30,
    31
  ];
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
  console.log(weeksInYear());
  console.log(daysInMonth[1]);
});
