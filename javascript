// Improved Form Submission Function
function submitForm(event) {
  event.preventDefault(); // Prevents page reload on form submission

  // Collect data from form fields
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Validate input fields to ensure all are filled
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Structure data as an object to match Google Sheet columns
  const formData = {
    data: {
      Name: name,
      Email: email,
      Message: message
    }
  };

  // Send data to SheetDB with a POST request
  fetch("https://sheetdb.io/api/v1/cpj8vb165akj6", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Success:", data); // Log response
    alert("Your message has been sent successfully!");
    // Clear form fields after successful submission
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error submitting your message. Please try again.");
  });
}

// Attach form submit handler
document.querySelector("form").addEventListener("submit", submitForm);

