/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-04-HTML/sw.js", {
    scope: "/ICS20-Unit5-04-HTML/",
  })
}

/**
 * This function tells the user if they are eligible to enter the museum
 */
function convert() {
  // input
  const day = document.getElementById("day").checked
  const age = document.getElementById("age").checked

  // process
  if (day == "Saturday" || day == "Sunday") || (age ==) {
    document.getElementById("answer").innerHTML = "You can watch an R Rated movie alone."

  // output
  document.getElementById("celsius").innerHTML =
    "<p>The  temperature in celsius is: " + celsius.toFixed(2) + "°<p>"
}
