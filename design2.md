# Output of Each Function
- `http_request()` is a function that allows the user to create an http request. The output will be:
`http_request(parameters)` -> this block would have many smaller blocks within it. A sample output would be:
```
Sending HTTP request to example_api with payload {"param1": "value1"} ...
Received response from https://example.com/api
Response status: 200
Response headers: {...}
Response body: {...}
```
The pseudocode for `http_request()` was described in design.md      

`custom_filed(title, value)` -> this block would contain a value to be passed in the http request. An example output would be:
```
requestOptions.headers['Custom-Header'] = 'Custom-Value';
```

`receive_http_request()` -> this block defines the response behavior after receiving a http response. The values of this can be passed to `http_requst`.   
Sample output:
```
Logging response...
Done!
```
# Recusive case
A use case for recursion in this project could be implementing custom retry logic for failed HTTP requests. For example:
```
function http_request(url, value1, value2, ... ,retryCount) {
	if (retryCount === 0) {
    		// Maximum retry count reached, give up.
    		log("Max retries reached for " + url);
    		return;
  	}

	try {
		send http request
	} catch (error) {...}
}
```

# Project Data
The blocly program will need to store:
- Configuration settings for HTTP requests (e.g., URL, request method, headers).
- Custom value data for HTTP requests.
- User-defined actions based on HTTP responses (e.g., logging, analyzing responses).

The blocly program interacts with this data by allowing users to:
- Define variables for configuration settings.
- Create blocks for logging and processing responses.

A specalized database isn't needed. Just an array of modified values.

# Simulation Software
Our project needs a server to send and receive responses with the user. For the purpose of development I am going to use a docker machine to handle these requests as these can be run on various hardware without issue. 
