fetch('data.json') // Fetch the JSON file
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    const nameElement = document.getElementById('temp'); // Get the HTML element to display the name
    nameElement.innerText = data.temp; // Display the name from the JSON data
  })
  .catch(error => console.error('Error fetching data:', error)); // Handle any errors