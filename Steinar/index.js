document.getElementById('bid-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var bidAmount = parseInt(document.getElementById('bid-amount').value);
  var currentBid = parseInt(document.getElementById('current-bid').textContent);
  var timerDisplay = document.getElementById('timer-display');
  var soldOutput = document.getElementById('sold-output');

  if (timerDisplay.textContent === 'Timer has ended!') {
    alert('Bidding has ended. You cannot place any more bids.');
  } else if (bidAmount > currentBid) {
    document.getElementById('current-bid').textContent = bidAmount;
    alert('Bid placed successfully!');
  } else {
    alert('Your bid must be higher than the current bid.');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector("#carouselExampleSlidesOnly");
  var carouselInstance = new bootstrap.Carousel(carousel);
});

$(document).ready(function() {
  // Initialize the Slick carousel
  $('#carouselExampleSlidesOnly').carousel({
    interval: 2000
  });

  // Timer
  var secondsLeft = 60; // Change this to set the desired time in seconds
  var timerDisplay = document.getElementById('timer-display');
  var soldOutput = document.getElementById('sold-output');

  function startTimer() {
    var interval = setInterval(function() {
      if (secondsLeft <= 0) {
        clearInterval(interval);
        // Timer has ended, perform necessary actions here
        timerDisplay.textContent = 'Timer has ended!';
        soldOutput.textContent = 'Sold!';
        alert('Timer has ended! Item sold!');
      } else {
        timerDisplay.textContent = secondsLeft + ' seconds remaining';
        secondsLeft--;
      }
    }, 1000);
  }

  startTimer();

  // Next Item button
  $('#next-item-button').on('click', function() {
    location.reload(); // Refresh the page
  });
});
