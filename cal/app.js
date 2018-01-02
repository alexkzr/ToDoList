document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("wrapper");
  let date = new Date();
  console.log(date.getDate());

  function isLeapYear(years) {
    if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }

  function daysInFebruary(years) {
    if (isLeapYear(years) === true) {
      console.log("it's a leap year");
      return 29;
    } else {
      console.log("it's not leap year");
      return 28;
    }
  }

  daysInFebruary(2016);

  function daysInYear() {
    if (daysInFebruary === 29) {
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
      const userInput = input.textContent;
      return daysInFebruary(userInput);
    });
  }

  userYear();

  function weeksInYear() {
    return daysInYear / 7;
  }

  const daysInMonth = [
    31,
    daysInFebruary(),
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
