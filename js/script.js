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
  const Saturday = document.getElementById("Saturday").value
  const Sunday = document.getElementById("Sunday").value
  const day = document.getElementById("days").checked
  const age = document.getElementById("age").checked

  // process
  if (day == "Saturday" || day == "Sunday") || (age > 5 && age < 80 ) {
    document.getElementById("answer").innerHTML = "You're eligible to enter the museum."
  } else {
    document.getElementById("answer").innerHTML = "You're not eligible to enter the museum"
  }