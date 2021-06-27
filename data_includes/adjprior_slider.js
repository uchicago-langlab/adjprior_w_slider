
var shuffleSequence = seq("consent", "intro", "practice1_intro", "practice1", "practice2_intro", "practice2", "end_practice", rshuffle(startsWith("item-")), "questionnaire", "exit");

var showProgressBar = false;
var pageTitle = "Mechanical Turk Experiment";
// "The results were successfully sent to the server.
// You can now validate your participation on Mechanical Turk. Thanks!"
var completionMessage = "your results have been submitted -- thank you!";
// "There was an error sending the results to the server.
var completionErrorMessage = "something went wrong";

var defaults = [
    "Separator", {
        transfer: 350,
        normalMessage: "+",
        errorMessage: "+",
        ignoreFailure: true
    },
    "DashedSentence", {
        hideProgressBar: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)",
        hideProgressBar: true
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes","No"],
        randomOrder: false,
        hideProgressBar: true
    },
    "Message", {
        hideProgressBar: false,
        transfer: "keypress"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    },
    "Vorm", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Scale_NoButton", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "0: Totally unlikely", rightLabel: "100: Totally likely"
    },
    "Scale_NoButton2", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "0: Totally unlikely", rightLabel: "100: Totally likely"
    },
    "Scale_NoButton3", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "0: Totally unlikely", rightLabel: "100: Totally likely"
    },
    "Scale_NoButton4", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "0: Totally unlikely", rightLabel: "100: Totally likely"
    },
    "Scale_New", {
        startValue: 0,  
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "0: Totally unlikely", rightLabel: "100: Totally likely"
    },
    "StaticSentence",{
        hideProgressBar: true
    },
    "StaticSentence2",{
        hideProgressBar: true
    },
    "MultiSlider",{
        children: ["Form","StaticSentence2", "Scale_NoButton", "Scale_NoButton2", "Scale_NoButton3", "Scale_NoButton4", "Scale_New", "Vorm"],
        triggers: [7],
        hideProgressBar: true
    }
];



var items = [

    ["sep", "Separator", { }],

    ["consent", "Form", {
        consentRequired: true,
        html: {include: "consent.html"}
    }],

    ["intro", "Form", {
        html: {include: "instructions.html"},
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    }],

    ["questionnaire", "Form", {
        html: {include: "questionnaire.html"},
        continueMessage: "click here to obtain an MTurk validation code"
    }],

    ["exit", "Form", {
        html: {include: "exit.html"},
        continueMessage: "click here to submit your results!"
    }],

    ["practice1_intro", "Message", {
        consentRequired: false,
        transfer: "click",
        continueMessage: "Click here to begin the first practice item",
        html: "<div><p>There will be 2 practice trials to help you get familiar with the procedures.</p>",
    }],

    ["practice2_intro", "Message", {
        consentRequired: false,
        transfer: "click",
        html: "<div><p>You've finished the first practice item.</p>",
        continueMessage: "Click here to begin the second practice item",
    }],

    ["practice1", "MultiSlider", {
        include: "practice1.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/pear1.png?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/pear2.png?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/pear3.png?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/pear4.png?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/pear5.png?raw=true" width="200px"/>', 
        html6:""}
    ],

    ["practice2", "MultiSlider", {
        include: "practice2.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/triangle1.png?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/triangle2.png?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/triangle3.png?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/triangle4.png?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/practice/triangle5.png?raw=true" width="200px"/>', 
        html6:""}
    ],

    ["end_practice", "Message", {
            consentRequired: false,
            transfer: "click",
            continueMessage: "Click here to begin the experiment.",
            html: "<div><p>You have finished the practice section.</p>\
            <p>You will not receive any more instructions for the rest of the study. For each image you will see, please <b>rate on a scale from 0 to 100 about how likely it is in the world. </b></p>",
    }],

    
    // Target Items

    // Green cube
    [["item-full_greencube", 101], "MultiSlider", {
        include: "item_shape_empty_full_full_greencube.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_greencube1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_greencube2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_greencube3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_greencube4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_greencube5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Yellow cubr
    [["item-full_yellowcube",102], "MultiSlider", {
        include: "item_shape_empty_full_full_yellowcube.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_yellowcube1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_yellowcube2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_yellowcube3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_yellowcube4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/full_yellowcube5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],
     
    // Blue arrow
    [["item-bent_bluearrow", 103], "MultiSlider", {
        include: "item_shape_straight_bent_bent_bluearrow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_bluearrow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_bluearrow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_bluearrow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_bluearrow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_bluearrow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green arrow     
    [["item-bent_greenarrow", 104], "MultiSlider", {
        include: "item_shape_straight_bent_bent_greenarrow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_greenarrow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_greenarrow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_greenarrow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_greenarrow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bent_greenarrow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red square
    [["item-big_redsquare", 105], "MultiSlider", {
        include: "item_shape_small_big_big_redsquare.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_redsquare1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_redsquare2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_redsquare3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_redsquare4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_redsquare5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Yellow circle         
    [["item-big_yellowcircle", 106], "MultiSlider", {
        include: "item_shape_small_big_big_yellowcircle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_yellowcircle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_yellowcircle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_yellowcircle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_yellowcircle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/big_yellowcircle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green oval
    [["item-wide_greenoval", 107], "MultiSlider", {
        include: "item_shape_narrow_wide_wide_greenoval.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_greenoval1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_greenoval2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_greenoval3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_greenoval4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_greenoval5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red oval
    [["item-wide_redoval", 108], "MultiSlider", {
        include: "item_shape_narrow_wide_wide_redoval.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_redoval1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_redoval2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_redoval3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_redoval4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/wide_redoval5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red circle
    [["item-striped_redcircle", 109], "MultiSlider", {
        include: "item_shape_plain_striped_striped_redcircle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_redcircle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_redcircle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_redcircle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_redcircle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_redcircle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Yellow square
    [["item-striped_yellowsquare", 110], "MultiSlider", {
        include: "item_shape_plain_striped_striped_yellowsquare.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_yellowsquare1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_yellowsquare2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_yellowsquare3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_yellowsquare4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/striped_yellowsquare5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green cylinder         
    [["item-tall_greencyclinder", 111], "MultiSlider", {
        include: "item_shape_short_tall_tall_greencylinder.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greencylinder1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greencylinder2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greencylinder3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greencylinder4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greencylinder5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green spiral
    [["item-tall_greenspiral", 112], "MultiSlider", {
        include: "item_shape_short_tall_tall_greenspiral.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greenspiral1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greenspiral2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greenspiral3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greenspiral4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/tall_greenspiral5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Blue circle
    [["item-open_bluecircle", 113], "MultiSlider", {
        include: "item_shape_closed_open_open_bluecircle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_bluecircle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_bluecircle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_bluecircle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_bluecircle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_bluecircle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red triangle
    [["item-open_redtriangle", 114], "MultiSlider", {
        include: "item_shape_closed_open_open_redtriangle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_redtriangle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_redtriangle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_redtriangle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_redtriangle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/open_redtriangle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Blue line
    [["item-curved_blueline", 115], "MultiSlider", {
        include: "item_shape_straight_curved_curved_blueline.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_blueline1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_blueline2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_blueline3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_blueline4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_blueline5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Greenline
    [["item-curved-greenline", 116], "MultiSlider", {
        include: "item_shape_straight_curved_curved_greenline.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_greenline1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_greenline2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_greenline3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_greenline4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/curved_greenline5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Yellow circle
    [["item-spotted_yellowcircle", 117], "MultiSlider", {
        include: "item_shape_plain_spotted_spotted_yellowcircle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowcircle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowcircle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowcircle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowcircle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowcircle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Yellow square    
    [["item-spotted_yellowsquare", 118], "MultiSlider", {
        include: "item_shape_plain_spotted_spotted_yellowsquare.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowsquare1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowsquare2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowsquare3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowsquare4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/spotted_yellowsquare5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Blue arrow
    [["item-thick_bluearrow", 119], "MultiSlider", {
        include: "item_shape_thin_thick_thick_bluearrow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_bluearrow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_bluearrow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_bluearrow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_bluearrow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_bluearrow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red arrow
    [["item-thick_redarrow", 120], "MultiSlider", {
        include: "item_shape_thin_thick_thick_redarrow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_redarrow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_redarrow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_redarrow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_redarrow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/thick_redarrow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green arrow
    [["item-long_greenarrow", 121], "MultiSlider", {
        include: "item_shape_short_long_long_greenarrow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenarrow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenarrow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenarrow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenarrow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenarrow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Green line
    [["item-long_greenline", 122], "MultiSlider", {
        include: "item_shape_short_long_long_greenline.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenline1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenline2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenline3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenline4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/long_greenline5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Blue square     
    [["item-bumpy_bluesquare", 123], "MultiSlider", {
        include: "item_shape_smooth_bumpy_bumpy_bluesquare.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_bluesquare1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_bluesquare2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_bluesquare3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_bluesquare4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_bluesquare5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Red square
    [["item-bumpy_redsquare", 124], "MultiSlider", {
        include: "item_shape_smooth_bumpy_bumpy_redsquare.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_redsquare1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_redsquare2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_redsquare3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_redsquare4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/shape/bumpy_redsquare5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Beer
    [["item-beer", 201], "MultiSlider", {
        include: "item_artifact_empty_full_beer.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/beer1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/beer2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/beer3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/beer4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/beer5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

     // Trash
    [["item-trash", 202], "MultiSlider", {
        include: "item_artifact_empty_full_trash.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/trash1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/trash2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/trash3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/trash4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/trash5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

     // Rod
    [["item-straightrod", 203], "MultiSlider", {
        include: "item_artifact_straight_bent_straightrod.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/straightrod1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/straightrod2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/straightrod3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/straightrod4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/straightrod5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Nail     
    [["item-bentnail", 204], "MultiSlider", {
        include: "item_artifact_straight_bent_bentnail.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bentnail1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bentnail2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bentnail3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bentnail4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bentnail5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Boat
    [["item-boat", 205], "MultiSlider", {
        include: "item_artifact_small_big_boat.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/boat1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/boat2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/boat3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/boat4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/boat5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Snowman         
    [["item-snowman", 206], "MultiSlider", {
        include: "item_artifact_small_big_snowman.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/snowman1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/snowman2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/snowman3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/snowman4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/snowman5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Bridge 1
    [["item-bridge", 207], "MultiSlider", {
        include: "item_artifact_narrow_wide_bridge.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bridge1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bridge2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bridge3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bridge4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bridge5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Sofa
    [["item-sofa", 208], "MultiSlider", {
        include: "item_artifact_narrow_wide_sofa.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/sofa1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/sofa2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/sofa3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/sofa4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/sofa5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Fish
    [["item-fish", 209], "MultiSlider", {
        include: "item_artifact_plain_striped_bw_stripe_fish.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bw_stripe_fish1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bw_stripe_fish2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bw_stripe_fish3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bw_stripe_fish4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/bw_stripe_fish5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Shirt 
    [["item-shirt", 210], "MultiSlider", {
        include: "item_artifact_plain_striped_shirt.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shirt1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shirt2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shirt3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shirt4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shirt5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Candle         
    [["item-candle", 211], "MultiSlider", {
        include: "item_artifact_short_tall_candle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/candle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/candle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/candle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/candle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/candle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Stack of books
    [["item-stack", 212], "MultiSlider", {
        include: "item_artifact_short_tall_stack.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/stack1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/stack2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/stack3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/stack4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/stack5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Chips
    [["item-chips", 213], "MultiSlider", {
        include: "item_artifact_closed_open_chips.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/chips1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/chips2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/chips3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/chips4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/chips5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Garage
    [["item-garage", 214], "MultiSlider", {
        include: "item_artifact_closed_open_garagedoor.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/garagedoor1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/garagedoor2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/garagedoor3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/garagedoor4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/garagedoor5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Bridge 2
    [["item-curvedbridge", 215], "MultiSlider", {
        include: "item_artifact_straight_curved_curvedbridge.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/curvedbridge1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/curvedbridge2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/curvedbridge3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/curvedbridge4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/curvedbridge5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Palm
    [["item-palm", 216], "MultiSlider", {
        include: "item_artifact_straight_curved_palm.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/palm1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/palm2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/palm3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/palm4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/palm5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Ladybug
    [["item-ladybug", 217], "MultiSlider", {
        include: "item_artifact_plain_spotted_ladybug.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/ladybug1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/ladybug2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/ladybug3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/ladybug4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/ladybug5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Pillow    
    [["item-pillow", 218], "MultiSlider", {
        include: "item_artifact_plain_spotted_pillow.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/pillow1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/pillow2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/pillow3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/pillow4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/pillow5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Marker
    [["item-marker", 219], "MultiSlider", {
        include: "item_artifact_thin_thick_marker.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/marker1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/marker2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/marker3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/marker4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/marker5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Book
    [["item-book", 220], "MultiSlider", {
        include: "item_artifact_thin_thick_book.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/book1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/book2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/book3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/book4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/book5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Noodle
    [["item-noodle", 221], "MultiSlider", {
        include: "item_artifact_short_long_noodle.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/noodle1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/noodle2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/noodle3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/noodle4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/noodle5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Table
    [["item-table", 222], "MultiSlider", {
        include: "item_artifact_short_long_table.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/table1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/table2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/table3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/table4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/table5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Shoe     
    [["item-shoe", 223], "MultiSlider", {
        include: "item_artifact_smooth_bumpy_shoe.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shoe1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shoe2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shoe3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shoe4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/shoe5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Squash
    [["item-squash", 224], "MultiSlider", {
        include: "item_artifact_smooth_bumpy_squash.html", 
        s2: "", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/squash1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/squash2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/squash3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/squash4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/artifact/squash5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],


    // Filler Items

    // Apple
    [["item-filler", 301], "MultiSlider", {
        include: "filler_apple.html", 
        s2: "   ", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/apple1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/apple2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/apple3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/apple4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/apple5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Banana
    [["item-filler", 302], "MultiSlider", {
        include: "filler_banana.html", 
        s2: "   ", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/banana1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/banana2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/banana3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/banana4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/banana5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Watermelon
    [["item-filler", 303], "MultiSlider", {
        include: "filler_watermelon.html", 
        s2: "   ", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/watermelon1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/watermelon2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/watermelon3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/watermelon4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/watermelon5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],

    // Garlic
    [["filler", 304], "MultiSlider", {
        include: "filler_garlic.html", 
        s2: "   ", 
        html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic1.jpeg?raw=true" width="200px"/>', 
        html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic2.jpeg?raw=true" width="200px"/>',
        html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic3.jpeg?raw=true" width="200px"/>',
        html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic4.jpeg?raw=true" width="200px"/>',
        html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic5.jpeg?raw=true" width="200px"/>', 
        html6:""}
    ],
    
    ];

