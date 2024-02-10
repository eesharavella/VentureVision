function validateForm() {
    const destination = document.getElementById("destination").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const numTravelers = document.getElementById("numTravelers").value;
    const budget = document.getElementById("budget").value;
  
    // Validate destination
    if (destination === "") {
      alert("Destination must be filled out");
      return false;
    }
  
    // Validate name
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Validate age
    if (age === "" || isNaN(age) || age < 1) {
      alert("Age must be a positive number");
      return false;
    }
  
    // Validate dates
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    if (startDateObj.getTime() > endDateObj.getTime()) {
      alert("End date must be after start date");
      return false;
    }
  
    // Validate number of travelers
    if (numTravelers < 1) {
      alert("Number of travelers must be at least 1");
      return false;
    }
  
    // Validate budget
    if (budget < 0) {
      alert("Budget cannot be negative");
      return false;
    }
  
    // If all inputs are valid, submit the form
    alert("Travel itinerary submitted successfully!");
    return true;
  }
  