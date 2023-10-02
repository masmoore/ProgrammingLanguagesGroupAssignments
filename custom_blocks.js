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
    