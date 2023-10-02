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


    