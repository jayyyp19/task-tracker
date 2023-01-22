const quotes = [
"'When you have a dream, you've got to grab it and never let go.'",
"'Nothing is impossible. The word itself says 'I'm possible!'",
"'There is nothing impossible to they who will try.'",
"'Life has got all those twists and turns. You've got to hold on tight and off you go'",
"'Keep your face always toward the sunshine, and shadows will fall behind you'",
"'Success is not final, failure is not fatal: it is the courage to continue that counts'",
"'You define your own life. Don't let other people write your script'",
"'You are never too old to set another goal or to dream a new dream.'",
"'At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it'",
"'Spread love everywhere you go'",
"'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on'"];
var i=Math.floor(Math.random()*11);
document.getElementById("quotes").textContent = quotes[i];

// TIME REMAINING

// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timeremaining").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeremaining").innerHTML = "EXPIRED";
  }
}, 1000);
function unhide(){
    var nav = document.getElementById("nav");
    nav.style.display = "block"; 
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    var close = document.getElementById("close");
    close.style.display = "block";
}
function hide(){
    var nav = document.getElementById("nav");
    nav.style.display = "none"; 
    var menu = document.getElementById("menu");
    menu.style.display = "block";
    var close = document.getElementById("close");
    close.style.display = "none";
}