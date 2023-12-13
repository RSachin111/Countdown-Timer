



function updateCountdown() {
    const Tdate =document.getElementById("tdate");
    const targetDate= new Date(Tdate.textContent).getTime();
    // const targetDate = new Date("2023-12-21T00:11:34").getTime(); // Replace with your target date
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    if (timeRemaining <= 0) {
      // Handle the case when the target date has passed
      document.getElementById("days").value = "00";
      document.getElementById("hours").value = "00";
      document.getElementById("minutes").value = "00";
      document.getElementById("seconds").value = "00";
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById("days").value = formatTime(days);
      document.getElementById("hours").value = formatTime(hours);
      document.getElementById("minutes").value = formatTime(minutes);
      document.getElementById("seconds").value = formatTime(seconds);
    }
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  
  // Initial update
  updateCountdown();
  
  
