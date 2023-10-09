//const makeHttpRequest = require('./http_request');
//const url = 'localhost:5500/';
// makeHttpRequest(url); -> supply this into blockly button 

Blockly.Blocks['printTest'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Print 'test' to screen");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
    
Blockly.JavaScript['printTest'] = function(block) {
    // Generate JavaScript code to print "test" to the screen
    var code = 'console.log("test");\n';
    return code;
};

// Define a custom block for "Delete Test" button.
Blockly.Blocks['deleteTest'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Delete Test");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Click to delete the test.");
        this.setHelpUrl("");
    }
};

// Define the JavaScript code generation for the custom block.
Blockly.JavaScript['deleteTest'] = function (block) {
    // Generate JavaScript code to perform the delete test action.
    alert("Test deleted!");
    var code = 'deleteTest();\n';
    return code;
};

Blockly.Blocks['dummy_test'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Dummy Test");
        this.appendValueInput("INPUT1")
            .setCheck(null)
            .appendField("Input 1");
        this.appendValueInput("INPUT2")
            .setCheck(null)
            .appendField("Input 2");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("This is a dummy test block with two inputs.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['dummy_test'] = function (block) {
    var value_input1 = Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_input2 = Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);

    // You can use value_input1 and value_input2 in your JavaScript code.
    // For demonstration, we'll concatenate the inputs and return them.
    var code = value_input1 + " " + value_input2;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Define a custom Blockly block for generating JSON for an HTTP request.
Blockly.Blocks['generateHttpRequestJson'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Generate HTTP Request JSON");
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("Headers")
            .setCheck("Object")
            .appendField("Headers (JSON)");
        this.appendValueInput("Parameters")
            .setCheck("Object")
            .appendField("Parameters (JSON)");
        this.appendValueInput("Data")
            .setCheck("Object")
            .appendField("Data (JSON)");
        this.setOutput(true, "Object");
        this.setColour(160);
        this.setTooltip("Generate JSON for an HTTP request.");
        this.setHelpUrl("");
    }
};

// Define the JavaScript code generation for the custom block.
Blockly.JavaScript['generateHttpRequestJson'] = function (block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_headers = Blockly.JavaScript.valueToCode(block, 'Headers', Blockly.JavaScript.ORDER_ATOMIC);
    var value_parameters = Blockly.JavaScript.valueToCode(block, 'Parameters', Blockly.JavaScript.ORDER_ATOMIC);
    var value_data = Blockly.JavaScript.valueToCode(block, 'Data', Blockly.JavaScript.ORDER_ATOMIC);

    // Generate the JSON object for the HTTP request.
    var code = '{\n';
    code += '  "url": ' + value_url + ',\n';
    code += '  "headers": ' + value_headers + ',\n';
    code += '  "parameters": ' + value_parameters + ',\n';
    code += '  "data": ' + value_data + '\n';
    code += '}\n';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['http_request_url'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("URL")
            .appendField(new Blockly.FieldTextInput("https://example.com"), "URL");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Input for the URL of the HTTP request.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['http_request_url'] = function (block) {
    var url = block.getFieldValue('URL');
    return [url, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['http_request_headers'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Headers (JSON)")
            .appendField(new Blockly.FieldTextInput('{"Content-Type": "application/json"}'), "Headers");
        this.setOutput(true, "Object");
        this.setColour(160);
        this.setTooltip("Input for the headers (JSON) of the HTTP request.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['http_request_headers'] = function (block) {
    var headers = block.getFieldValue('Headers');
    try {
        var parsedHeaders = JSON.parse(headers);
        return [JSON.stringify(parsedHeaders), Blockly.JavaScript.ORDER_ATOMIC];
    } catch (e) {
        console.error("Invalid JSON format for headers: " + headers);
        return ["{}", Blockly.JavaScript.ORDER_ATOMIC];
    }
};

Blockly.Blocks['http_request_parameters'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Parameters (JSON)")
            .appendField(new Blockly.FieldTextInput('{"param1": "value1", "param2": "value2"}'), "Parameters");
        this.setOutput(true, "Object");
        this.setColour(160);
        this.setTooltip("Input for the parameters (JSON) of the HTTP request.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['http_request_parameters'] = function (block) {
    var parameters = block.getFieldValue('Parameters');
    try {
        var parsedParameters = JSON.parse(parameters);
        return [JSON.stringify(parsedParameters), Blockly.JavaScript.ORDER_ATOMIC];
    } catch (e) {
        console.error("Invalid JSON format for parameters: " + parameters);
        return ["{}", Blockly.JavaScript.ORDER_ATOMIC];
    }
};

Blockly.Blocks['http_request_data'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Data (JSON)")
            .appendField(new Blockly.FieldTextInput('{"key1": "value1", "key2": "value2"}'), "Data");
        this.setOutput(true, "Object");
        this.setColour(160);
        this.setTooltip("Input for the data (JSON) of the HTTP request.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['http_request_data'] = function (block) {
    var data = block.getFieldValue('Data');
    try {
        var parsedData = JSON.parse(data);
        return [JSON.stringify(parsedData), Blockly.JavaScript.ORDER_ATOMIC];
    } catch (e) {
        console.error("Invalid JSON format for data: " + data);
        return ["{}", Blockly.JavaScript.ORDER_ATOMIC];
    }
};
