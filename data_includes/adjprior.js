
var shuffleSequence = seq("test", "intro1","intro2");

var completionMessage = "Thank you for your participation!"

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true,
        hideProgressBar: true
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
       hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
    },
    "Vorm", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Scale_NoButton", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
        // leftLabel: "(Totally unlikely)", rightLabel: "(Totally likely)"
    },
    "Scale_NoButton2", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
      //  leftLabel: "Very unlikely", rightLabel: "Very likely" 
    },
    "Scale_NoButton3", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
      //  leftLabel: "Very unlikely", rightLabel: "Very likely" 
    },
    "Scale_NoButton4", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
      //  leftLabel: "Very unlikely", rightLabel: "Very likely" 
    },
    "Scale_New", {
        startValue: 0,  
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "(Totally unlikely)", rightLabel: "(Totally likely)"
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

    ["intro", "Form", {consentRequired: true, html: {include: "intro.html" },
      validators: {
        age: function (s) {if (s.match(/^\d+$/)) {return true;} else {return "Bad value for \u2018age\u2019";}},
        natlang: function (s) {if (s.match(/^[a-zA-Z]+$/)) {return true;} else {return "Bad value for \u2018natlang\u2019";}},
        state: function (s) {if (s.match(/^[a-zA-Z]+$/)) {return true;} else {return "Bad value for \u2018state\u2019";}},
        parentlang: function (s) {if (s.match(/^[a-zA-Z]+$/)) {return true;} else {return "Bad value for \u2018parentlang\u2019";}},
        domlang: function (s) {if (s.match(/^[a-zA-Z]+$/)) {return true;} else {return "Bad value for \u2018domlang\u2019";}},
      }} ],
    ["intro1", "Form", {consentRequired: true, html: {include: "intro1.html"}}],
    ["intro2", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
    ["intro3", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
    
        ["setcounter", "__SetCounter__", { }],
    
  ["consent", "Form", {html: {include: "consent_form.html"}}],
 
  // end items
  ["end_experiment", "Form", {html: {include: "study_end.html"}}],   

    
    
// items
[["test",3], "MultiSlider", {include: 'filler_garlic.html', 
                            s2: "   ", 
                            html1: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic1.jpeg?raw=true" width="200px"/>', 
                            html2: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic2.jpeg?raw=true" width="200px"/>',
                            html3: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic3.jpeg?raw=true" width="200px"/>',
                            html4: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic4.jpeg?raw=true" width="200px"/>',
                            html5: '<img src="https://github.com/uchicago-langlab/adjprior_w_slider/blob/main/materials/fillers/garlic5.jpeg?raw=true" width="200px"/>', 
                            html6:""}]
    
    ];

