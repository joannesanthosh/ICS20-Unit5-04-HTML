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
  let day = document.getElementById("days").value
  let age = parseInt(document.getElementById("age").value)

   var Saturday = document.getElementById("Saturday")
   var Sunday = document.getElementById("Sunday")

  // process
  if ((day == Saturday || day == Sunday) || (age > 5 && age < 80 )) {
    document.getElementById("answer").innerHTML = "You're eligible to enter the museum."
  } else {
    document.getElementById("answer").innerHTML = "You're not eligible to enter the museum."
  }
}