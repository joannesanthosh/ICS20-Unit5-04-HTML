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
 * Input
 */
function convert() {
  var day = document.getElementById("day").value
  var age = document.getElementById("age").value

  // process
  if ((day == "Saturday" || day == "Sunday") && (age > 5 || age < 80 )) {
    document.getElementById("answer").innerHTML = "You're eligible to enter the museum."
  } else {
    document.getElementById("answer").innerHTML = "You're not eligible to enter the museum."
  }
}