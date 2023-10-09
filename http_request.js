/* ===== HTTP Main Request Block ===== */
// Import a library for making HTTP requests
const axios = require('axios');

// Function to make the HTTP request with retries
async function http_request_with_retries(url, retryCount, json_data) {
  if (retryCount === 0) {
    // Maximum retry count reached, give up.
    console.log("Max retries reached for " + url);
    return;
  }

  try {
    // Make an HTTP POST request to the Flask server with JSON data
    const response = await axios.post(url, json_data, {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header to specify JSON data
      },
    });

    // Parse the JSON response
    const jsonResponse = response.data;
    console.log(jsonResponse);

    // You can also do something with the parsed JSON data here

  } catch (error) {
    console.error(error);

    // Retry the request with a reduced retry count
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Add a delay between retries if needed
    await http_request_with_retries(url, retryCount - 1, json_data); // Pass json_data to the retry function
  }
}

/* Include the following code in a block that uses an http request
// Usage example
const url = 'http://127.0.0.1:8000/your-endpoint'; // Replace with the correct URL of your Flask server
const maxRetries = 3;

// Custom user-supplied JSON data
const customData = {
  'key1': 'value1',
  'key2': 'value2',
};

http_request_with_retries(url, maxRetries, customData);

*/