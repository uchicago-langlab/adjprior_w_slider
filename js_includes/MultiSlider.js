/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "MultiSlider",
   
    
jqueryWidget: {

    _init: function () {
                          
        var opts = {
            // this.options.transfer = null; // Remove 'click to continue message'
            options:     this.options,
            triggers:    [7],
            children:    ["Form", {html: {include: this.options.include}, continueMessage: null},
                          "StaticSentence2",{s2: this.options.s2},
                          "Scale_NoButton", {html1: this.options.html1},
                          "Scale_NoButton2", {html2: this.options.html2},
                          "Scale_NoButton3", {html3: this.options.html3},
                          "Scale_NoButton4", {html4: this.options.html4},
                          "Scale_New", {html5: this.options.html5},
                          "Vorm", {html6: this.options.html6}] /*,
            manipulators: [
                [0, function(div) { div.css('font-size', "larger"); return div; }]
            ]*/
        };

        this.element.VBox(opts);
    }
},

properties: {
    obligatory: ["include","s2"]
}
});