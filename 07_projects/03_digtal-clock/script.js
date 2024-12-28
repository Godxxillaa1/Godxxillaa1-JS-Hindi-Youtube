timeelement = document.querySelector("#time")
dateelement = document.querySelector("#date")

// Set interval to update time every second
intervalID = setInterval(function () {
  // Create a new Date object
  const now = new Date();
  // Get components of the current time and date
  const date = now.getDate();
  const month = now.getMonth() + 1; // Add 1 to make it human-readable
  const year = now.getFullYear();
  let sec = now.getSeconds();
  const min = now.getMinutes();
  const hours = now.getHours().toString().padStart(2, "0"); // Ensure 2-digit format


  
  if (String(sec).length <= 1) {sec = `0${sec}`};

  timeelement.textContent = `${hours} : ${min} : ${sec}`
  dateelement.textContent = `${date} : ${month} : ${year}`

  // console.log(String(sec).length);

}, 1000);

// console.log(intervalID);
