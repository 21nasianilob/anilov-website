// Form submission function
function submitForm(event) {
  event.preventDefault(); // Prevents page reload on form submission

  // Collect data from form fields
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Structure data as an object to match Google Sheet columns
  const data = {
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
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data); // Log response
    alert("Your message has been sent!");
  })
  .catch(error => console.error("Error:", error));
}

// Attach form submit handler
document.querySelector("form").addEventListener("submit", submitForm);
