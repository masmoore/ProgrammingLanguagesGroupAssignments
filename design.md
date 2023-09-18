# Design.md

## Create a HTTP Request
Maybe use a HTTP library for JS like axios
```js
Blockly.Blocks['http_request'] = {
  init: function() {
    this.appendValueInput('URL')
        .setCheck('String')
        .appendField('Make HTTP request to');
    this.appendDummyInput()
        .appendField('Method')
        .appendField(new Blockly.FieldDropdown([['GET', 'GET'], ['POST', 'POST']]), 'METHOD');
    this.appendValueInput('PARAMS')
        .setCheck('Object')
        .appendField('with parameters');
    this.setInputsInline(false);
    this.setColour(230);
    this.setOutput(true, 'String');
    this.setTooltip('Make an HTTP request with parameters.');
    this.setHelpUrl('');
  }

  // Add a new field for custom fields
  this.appendStatementInput('CUSTOM_FIELDS')
      .setCheck('custom_field')
      .appendField('Custom Fields');
};

Blockly.JavaScript['http_request'] = function(block) {
  const url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  const method = block.getFieldValue('METHOD');
  const params = Blockly.JavaScript.valueToCode(block, 'PARAMS', Blockly.JavaScript.ORDER_ATOMIC);

  // Generate the HTTP request code
  const httpRequestCode =
    // Sample HTTP request code
    const requestOptions = {
      method: '${method}',
      url: ${url},
      params: ${params}
    };

    // Make the HTTP request
    axios(requestOptions)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  return httpRequestCode;
};
```

## A Custom Field Block
This block will allow the user to insert custom field values
```js
Blockly.Blocks['custom_field'] = {
  init: function() {
    this.appendValueInput('KEY')
        .setCheck('String')
        .appendField('Custom Field: Key');
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('Value');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Define a custom HTTP field (e.g., header or parameter)');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['custom_field'] = function(block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  // Generate the custom field code here
  const customFieldCode = `
    // Add a custom field to your request
    requestOptions.headers['${key}'] = ${value};
  `;

  return customFieldCode;
};
```

## Receive HTTP Request
```js
Write a function to visualize receiving an HTTP request, using a backend server to handle receiving it

Blockly.Blocks['receive_http_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Receive HTTP Request');
    this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('Do');
    this.setColour(230);
    this.setTooltip('Receive an HTTP request and perform actions based on it.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['receive_http_request'] = function(block) {
  const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

  // Generate code to handle the received HTTP request here
  const code = `
    // Simulate receiving an HTTP request
    const request = {
      method: 'GET',
      url: 'https://example.com/api',
      params: {},
      headers: {},
      // ... other request properties
    };

    // Handle the received HTTP request
    // You can access request properties and perform actions based on them
    ${statements_do}
  `;

  return code;
};
```
Simulates receiving one for the sake of the Blockly visualization. In a real implementation, you would need to set up an actual server to handle incoming HTTP requests.

## Sample Action - Log
```js
Blockly.Blocks['log_http_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Log HTTP Request');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Log the received HTTP request.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['log_http_request'] = function(block) {
  // Generate code to log the received HTTP request here
  const code = `
    console.log(request);
  `;

  return code;
};
```
From HTTP request, log action
