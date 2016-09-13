// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computePayroll();
});

// Named constants
var BASE_HOURS = 40;
var OT_MULTIPLIER = 1.5;

// Global variables
var hoursWorked;    // Number of hours worked
var hourlyPayRate;  // Hourly pay rate
var basePay;        // Pay not including overtime
var overtimeHours;  // Overtime hours worked
var overtimePay;    // Overtime pay
var grossPay;       // Total gross pay

function computePayroll(){
  // Get the hours worked and hourly pay rate.
  hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
  hourlyPayRate =  parseFloat(document.getElementById('hourlyPayRate').value);


  // Determine the gross pay.
  if (hoursWorked > BASE_HOURS)
  {
    // Calculate the base pay (without overtime).
    basePay = hourlyPayRate * BASE_HOURS;

    // Calculate the number of overtime hours.
    overtimeHours = hoursWorked - BASE_HOURS;

    // Calculate the overtime pay.
    overtimePay = overtimeHours * hourlyPayRate * OT_MULTIPLIER;

    // Calculate the gross pay.
    grossPay = basePay + overtimePay;
  }
  else
  {
    // Caloculate the gross pay.
    grossPay = hoursWorked * hourlyPayRate;
  }

  // Display the gross pay, with
  // the output rounded to cents.
  document.getElementById('outGrossPay').innerHTML = "$" + grossPay.toFixed(2);
}
