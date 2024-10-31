fetch('https://sheetdb.io/api/v1/cpj8vb165akj6') // Replace YOUR_API_KEY with the API key from SheetDB
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
