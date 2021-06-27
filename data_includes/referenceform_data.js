PennController.ResetPrefix(null) // Shorten command names (keep this line here)

DebugOff()

var shuffleSequence = seq("intro", "setcounter", sepWith("sep", "practice_instr"), "presep", sepWith("sep", "practice"), sepWith("sep", rshuffle(startsWith("RF"), startsWith("f"))), "exit");
//var shuffleSequence = seq(sepWith("sep", "practice_instr"), "presep", sepWith("sep", "practice"), sepWith("sep", rshuffle(startsWith("RF"), startsWith("f"))), "exit");
var practiceItemTypes = ["practice_instr"];
//var practiceItemMessage = "This is a practice trial.";

var defaults = [
    "Separator", {
        transfer: 1200,
        normalMessage: "Please wait for the next passage.",
    },
    
    "DashedAcceptabilityJudgment", {
        mode: "self-paced reading",
        display: "dashed",
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "On a 1-7 scale, how acceptable is this a natural sentence? Cick a box above or press a number key to answer.",
        leftComment: "(Unnatural)", rightComment: "(Natural)",
        hideProgressBar: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Is this an acceptable sentence? Cick boxes to answer.",
        leftComment: "(Unnatural)", rightComment: "(Natural)",
        hideProgressBar: true
    },
    "DashedSentence", {
        mode: "self-paced reading",
        hideProgressBar: true
    },
   
    "Message", {
        hideProgressBar: false
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        continueMessage: "Please press here to continue"
    }
];

var aj = "DashedAcceptabilityJudgment";

var items = [


    ["intro", "Form", {consentRequired: true, html: {include: "consent.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
    
    
    ["sep", "Separator", { }],
    
    
    
    ["setcounter", "__SetCounter__", { }],
    
  
    
    ["practice_instr", "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I wanted to go shopping downtown, so I decided to take the public bus. I waited at the bus stop where other people were also waiting."],
                          ]},
                    "DashedAcceptabilityJudgment", {
                          mode: "self-paced reading",
                          display: "dashed",
                          s: ['The bus', 'came', 'right on time', 'and', 'pulled over', 'to the curb.'],
                          as: ["1", "2", "3", "4", "5", "6", "7"],
                          presentAsScale: true,
                          instructions: "On a 1-7 scale, how acceptable is this a natural sentence? Cick a box above or press a number key to answer.\
                                         (Hint: The continuation sentence you just read is:\
                                         'The bus came right on time and pulled over to the curb.'\
                                         This sentence sounds pretty natural as the continuation of the passage you read in step 1, \
                                         so you would probably put a high rate of acceptability on it.)",
                          leftComment: "(Unnatural)", rightComment: "(Natural)"}],
    
    
           
    ["practice_instr", "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I needed to go grocery shopping. I drove to the grocery store and got the list from my purse."],
                          ]},
                    "DashedAcceptabilityJudgment", {
                          mode: "self-paced reading",
                          display: "dashed",
                          s: ['I', 'walked into', 'the front door', 'and', 'was greeted', 'by these cashiers.'],
                          as: ["1", "2", "3", "4", "5", "6", "7"],
                          presentAsScale: true,
                          instructions: "On a 1-7 scale, how acceptable is this a natural sentence? Cick a box above or press a number key to answer.\
                                         (Hint: The continuation sentence you just read is:\
                                         'I walked into the front door and was greeted by these cashiers.'\
                                         In the passage that you've read in step 1 of this trial, 'the cashiers' have not ever been mentioned.\
                                         So it would be a bit confusing to use 'these cashiers' to refer to the store staff who greeted the narrator.\
                                         In this sense, it would be more appropriate to put a low rate of acceptability on this continuation sentence.)",
                          leftComment: "(Unnatural)", rightComment: "(Natural)"}],
                                                       
    
    
    ["practice_instr", "Message", {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "The practice session is over now. You will start the experiment now. Please press the spacebar to continue"],
                          ]}], 
    
                                   
    
    ["presep", Separator, { transfer: 2500, normalMessage: "Please get ready. We will start. Please wait..." }],
                     
        
    
    ["practice", "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last week I went to the hairdresser and got my hair cut. When I got there, the receptionist told me I could have a seat and she'd call me when it was time for my appointment."],
                          ]},
                  aj, {s: ['I', 'flipped through', 'a magazine,', 'and', 'about', 'five minutes', 'later', 'my', 'name', 'was called.']}], 
                           
       
    
    ["practice", "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I love everything about libraries; their quiet atmosphere, comfortable chairs, and rows and rows of books on every topic. I don't have enough money to go out and buy books whenever I want, so I often go to the library to borrow books for free. Recently, I decided to go to the library and just browse until I found something interesting."],
                          ]},
                  aj, {s: ['I', 'drove', 'to', 'the library', 'and', 'parked', 'close to', 'the door,', 'since', 'I', 'expected', 'to leave', 'with', 'an armful of', 'heavy books.']}],                       
       
                           
                           
    [["RF_a",1], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was tired from a long day of baseball practice and could not wait to take a bath. I was pretty muddy from sliding into home plate and scoring the winning run. I went into the bathroom and started running the water in the bathtub. I put the hot and cold faucets both on to make sure the water was warm but not too hot."],]},
                  aj, {s: ['After', 'it', 'filled up', 'a little', 'over', 'the halfway point', 'I', 'got into', 'the bath.']}],     
    [["RF_b",1], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was tired from a long day of baseball practice and could not wait to take a bath. I was pretty muddy from sliding into home plate and scoring the winning run. I went into the bathroom and started running the water in the bathtub. I put the hot and cold faucets both on to make sure the water was warm but not too hot."],]},
                  aj, {s: ['After', 'this tub', 'filled up', 'a little', 'over', 'the halfway point', 'I', 'got into', 'the bath.']}],
    [["RF_c",1], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was tired from a long day of baseball practice and could not wait to take a bath. I was pretty muddy from sliding into home plate and scoring the winning run. I went into the bathroom and started running the water in the bathtub. I put the hot and cold faucets both on to make sure the water was warm but not too hot."],]},
                  aj, {s: ['After', 'that tub', 'filled up', 'a little', 'over', 'the halfway point', 'I', 'got into', 'the bath.']}],
    [["RF_d",1], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was tired from a long day of baseball practice and could not wait to take a bath. I was pretty muddy from sliding into home plate and scoring the winning run. I went into the bathroom and started running the water in the bathtub. I put the hot and cold faucets both on to make sure the water was warm but not too hot."],]},
                  aj, {s: ['After', 'the tub', 'filled up', 'a little', 'over', 'the halfway point', 'I', 'got into', 'the bath.']}],
    
    
    
    [["RF_a",2], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Taking the train into the city is so much fun! We go into the train station and buy tickets for the train we want to take. When the train arrives at the station it is very loud. We wait for it to stop and then follow the other passengers on board. We find our seats, hopefully near a window, and sit down."],]},
                  aj, {s: ['When', 'the conductor', 'comes around,', 'we', 'give', 'him', 'our tickets', 'and', 'he', 'punches', 'a hole', 'in', 'each of them.']}],
    [["RF_b",2], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Taking the train into the city is so much fun! We go into the train station and buy tickets for the train we want to take. When the train arrives at the station it is very loud. We wait for it to stop and then follow the other passengers on board. We find our seats, hopefully near a window, and sit down."],]},
                  aj, {s: ['When', 'the conductor', 'comes around,', 'we', 'give', 'this conductor', 'our tickets', 'and', 'he', 'punches', 'a hole', 'in', 'each of them.']}],
    [["RF_c",2], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Taking the train into the city is so much fun! We go into the train station and buy tickets for the train we want to take. When the train arrives at the station it is very loud. We wait for it to stop and then follow the other passengers on board. We find our seats, hopefully near a window, and sit down."],]},
                  aj, {s: ['When', 'the conductor', 'comes around,', 'we', 'give', 'that conductor', 'our tickets', 'and', 'he', 'punches', 'a hole', 'in', 'each of them.']}],
    [["RF_d",2], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Taking the train into the city is so much fun! We go into the train station and buy tickets for the train we want to take. When the train arrives at the station it is very loud. We wait for it to stop and then follow the other passengers on board. We find our seats, hopefully near a window, and sit down."],]},
                  aj, {s: ['When', 'the conductor', 'comes around,', 'we', 'give', 'the conductor', 'our tickets', 'and', 'he', 'punches', 'a hole', 'in', 'each of them.']}],
    
    
    
    [["RF_a",3], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was a little nervous about my plane trip, but my friend was coming with me, and that made me feel a little better. We went to the airport, and gave our bags to an attendant to be checked onto the plane. We went through the security station to make sure everything was safe, then we were ready to go to our terminal. We were there a little early, so we grabbed a bite to eat at the restaurant while we waited. When the plane arrived, we gave the attendant our tickets and got on the plane."],]},
                  aj, {s: ['Once', 'we', 'were', 'all seated,', 'she', 'went over', 'some safety rules', 'with us', 'before', 'we', 'took off.']}],
    [["RF_b",3], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was a little nervous about my plane trip, but my friend was coming with me, and that made me feel a little better. We went to the airport, and gave our bags to an attendant to be checked onto the plane. We went through the security station to make sure everything was safe, then we were ready to go to our terminal. We were there a little early, so we grabbed a bite to eat at the restaurant while we waited. When the plane arrived, we gave the attendant our tickets and got on the plane."],]},
                  aj, {s: ['Once', 'we', 'were', 'all seated,', 'this flight attendant', 'went over', 'some safety rules', 'with us', 'before', 'we', 'took off.']}],
    [["RF_c",3], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was a little nervous about my plane trip, but my friend was coming with me, and that made me feel a little better. We went to the airport, and gave our bags to an attendant to be checked onto the plane. We went through the security station to make sure everything was safe, then we were ready to go to our terminal. We were there a little early, so we grabbed a bite to eat at the restaurant while we waited. When the plane arrived, we gave the attendant our tickets and got on the plane."],]},
                  aj, {s: ['Once', 'we', 'were', 'all seated,', 'that flight attendant', 'went over', 'some safety rules', 'with us', 'before', 'we', 'took off.']}],
    [["RF_d",3], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was a little nervous about my plane trip, but my friend was coming with me, and that made me feel a little better. We went to the airport, and gave our bags to an attendant to be checked onto the plane. We went through the security station to make sure everything was safe, then we were ready to go to our terminal. We were there a little early, so we grabbed a bite to eat at the restaurant while we waited. When the plane arrived, we gave the attendant our tickets and got on the plane."],]},
                  aj, {s: ['Once', 'we', 'were', 'all seated,', 'the flight attendant', 'went over', 'some safety rules', 'with us', 'before', 'we', 'took off.']}],
    
    
    
    [["RF_a",4], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I'd been looking forward to reading Tigerman, the new novel by my favorite writer, Nick Harkaway. However, I don't like paying for the hard cover editions of books, and the paperback version would not be released for another year. I therefore decided to walk to my local library and borrow the book. To my disappointment, it was already checked out, but I was able to place a hold on the book."],]},
                  aj, {s: ['Six weeks', 'later,', 'it', 'sent', 'me', 'an e-mail', 'to let', 'me', 'know', 'that', 'Tigerman', 'had been', 'returned', 'and', 'I', 'could', 'now', 'check', 'it', 'out.']}],
    [["RF_b",4], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I'd been looking forward to reading Tigerman, the new novel by my favorite writer, Nick Harkaway. However, I don't like paying for the hard cover editions of books, and the paperback version would not be released for another year. I therefore decided to walk to my local library and borrow the book. To my disappointment, it was already checked out, but I was able to place a hold on the book."],]},
                  aj, {s: ['Six weeks', 'later,', 'this library', 'sent', 'me', 'an e-mail', 'to let', 'me', 'know', 'that', 'Tigerman', 'had been', 'returned', 'and', 'I', 'could', 'now', 'check', 'it', 'out.']}],
    [["RF_c",4], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I'd been looking forward to reading Tigerman, the new novel by my favorite writer, Nick Harkaway. However, I don't like paying for the hard cover editions of books, and the paperback version would not be released for another year. I therefore decided to walk to my local library and borrow the book. To my disappointment, it was already checked out, but I was able to place a hold on the book."],]},
                  aj, {s: ['Six weeks', 'later,', 'that library', 'sent', 'me', 'an e-mail', 'to let', 'me', 'know', 'that', 'Tigerman', 'had been', 'returned', 'and', 'I', 'could', 'now', 'check', 'it', 'out.']}],
    [["RF_d",4], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I'd been looking forward to reading Tigerman, the new novel by my favorite writer, Nick Harkaway. However, I don't like paying for the hard cover editions of books, and the paperback version would not be released for another year. I therefore decided to walk to my local library and borrow the book. To my disappointment, it was already checked out, but I was able to place a hold on the book."],]},
                  aj, {s: ['Six weeks', 'later,', 'the library', 'sent', 'me', 'an e-mail', 'to let', 'me', 'know', 'that', 'Tigerman', 'had been', 'returned', 'and', 'I', 'could', 'now', 'check', 'it', 'out.']}],
    
    
    
    [["RF_a",5], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "One day I decided that my backyard was missing something. I walked around in my backyard and decided that a tree would go perfectly in the corner. I drove to my local plant store and walked around looking at all the various trees. I read the tags and found one that would do perfect in my climate and it looked very cool. I walked up to the workers and told them I would like to purchase the tree."],]},
                  aj, {s: ['They', 'loaded', 'the tree', 'up', 'and', 'I', 'paid', 'for', 'the tree', 'and', 'drove', 'home.']}],
    [["RF_b",5], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "One day I decided that my backyard was missing something. I walked around in my backyard and decided that a tree would go perfectly in the corner. I drove to my local plant store and walked around looking at all the various trees. I read the tags and found one that would do perfect in my climate and it looked very cool. I walked up to the workers and told them I would like to purchase the tree."],]},
                  aj, {s: ['These workers', 'loaded', 'the tree', 'up', 'and', 'I', 'paid', 'for', 'the tree', 'and', 'drove', 'home.']}],
    [["RF_c",5], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "One day I decided that my backyard was missing something. I walked around in my backyard and decided that a tree would go perfectly in the corner. I drove to my local plant store and walked around looking at all the various trees. I read the tags and found one that would do perfect in my climate and it looked very cool. I walked up to the workers and told them I would like to purchase the tree."],]},
                  aj, {s: ['Those workers', 'loaded', 'the tree', 'up', 'and', 'I', 'paid', 'for', 'the tree', 'and', 'drove', 'home.']}],
    [["RF_d",5], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "One day I decided that my backyard was missing something. I walked around in my backyard and decided that a tree would go perfectly in the corner. I drove to my local plant store and walked around looking at all the various trees. I read the tags and found one that would do perfect in my climate and it looked very cool. I walked up to the workers and told them I would like to purchase the tree."],]},
                  aj, {s: ['The workers', 'loaded', 'the tree', 'up', 'and', 'I', 'paid', 'for', 'the tree', 'and', 'drove', 'home.']}],
    
    
    
    [["RF_a",6], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday on my way home from work I heard a loud popping noise and nearly lost control of my bicycle. After coming to a stop I noticed that my tire was flat."],]},
                  aj, {s: ['I', 'ended up', 'having to', 'walk', 'my bike', 'the rest of the way', 'home', 'as', 'I', 'did not', 'have', 'any tools', 'to repair', 'it', 'on the spot.']}],
    [["RF_b",6], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday on my way home from work I heard a loud popping noise and nearly lost control of my bicycle. After coming to a stop I noticed that my tire was flat."],]},
                  aj, {s: ['I', 'ended up', 'having to', 'walk', 'my bike', 'the rest of the way', 'home', 'as', 'I', 'did not', 'have', 'any tools', 'to repair', 'this tire', 'on the spot.']}],
    [["RF_c",6], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday on my way home from work I heard a loud popping noise and nearly lost control of my bicycle. After coming to a stop I noticed that my tire was flat."],]},
                  aj, {s: ['I', 'ended up', 'having to', 'walk', 'my bike', 'the rest of the way', 'home', 'as', 'I', 'did not', 'have', 'any tools', 'to repair', 'that tire', 'on the spot.']}],
    [["RF_d",6], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday on my way home from work I heard a loud popping noise and nearly lost control of my bicycle. After coming to a stop I noticed that my tire was flat."],]},
                  aj, {s: ['I', 'ended up', 'having to', 'walk', 'my bike', 'the rest of the way', 'home', 'as', 'I', 'did not', 'have', 'any tools', 'to repair', 'the tire', 'on the spot.']}],
    
    
    
    [["RF_a",7], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last Friday, my car broke down. I had to get to work Monday, so I decided to ride the public bus since it ran fairly close to my home and work both. Monday morning I got ready early and set off to wait at the bus stop."],]},
                  aj, {s: ['After', 'sitting', 'for', 'quite a while,', 'it', 'finally', 'pulled up.']}],
    [["RF_b",7], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last Friday, my car broke down. I had to get to work Monday, so I decided to ride the public bus since it ran fairly close to my home and work both. Monday morning I got ready early and set off to wait at the bus stop."],]},
                  aj, {s: ['After', 'sitting', 'for', 'quite a while,', 'this bus', 'finally', 'pulled up.']}],
    [["RF_c",7], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last Friday, my car broke down. I had to get to work Monday, so I decided to ride the public bus since it ran fairly close to my home and work both. Monday morning I got ready early and set off to wait at the bus stop."],]},
                  aj, {s: ['After', 'sitting', 'for', 'quite a while,', 'that bus', 'finally', 'pulled up.']}],
    [["RF_d",7], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last Friday, my car broke down. I had to get to work Monday, so I decided to ride the public bus since it ran fairly close to my home and work both. Monday morning I got ready early and set off to wait at the bus stop."],]},
                  aj, {s: ['After', 'sitting', 'for', 'quite a while,', 'the bus', 'finally', 'pulled up.']}],
    
    
    
    [["RF_a",8], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I have a recipe for a yellow layer cake that I really like that came in my Kitchenaid cookbook. I use my Kitchenaid mixer to make it. It 's not too dry, and it's not too sweet, which is why I like it."],]},
                  aj, {s: ['I', 'took', 'my mixer', 'out of', 'the pantry', 'and', 'set', 'it', 'on the counter.']}],
    [["RF_b",8], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I have a recipe for a yellow layer cake that I really like that came in my Kitchenaid cookbook. I use my Kitchenaid mixer to make it. It 's not too dry, and it's not too sweet, which is why I like it."],]},
                  aj, {s: ['I', 'took', 'my mixer', 'out of', 'the pantry', 'and', 'set', 'this mixer', 'on the counter.']}],
    [["RF_c",8], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I have a recipe for a yellow layer cake that I really like that came in my Kitchenaid cookbook. I use my Kitchenaid mixer to make it. It 's not too dry, and it's not too sweet, which is why I like it."],]},
                  aj, {s: ['I', 'took', 'my mixer', 'out of', 'the pantry', 'and', 'set', 'that mixer', 'on the counter.']}],
    [["RF_d",8], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I have a recipe for a yellow layer cake that I really like that came in my Kitchenaid cookbook. I use my Kitchenaid mixer to make it. It 's not too dry, and it's not too sweet, which is why I like it."],]},
                  aj, {s: ['I', 'took', 'my mixer', 'out of', 'the pantry', 'and', 'set', 'the mixer', 'on the counter.']}],
    
    
    
    [["RF_a",9], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "A bath is an excellent way to relieve stress in your life. It's a very simple process and recommended only if you have some time to yourself. Make sure to let everyone know that you are going to take a bath, and not to bother you. This works out much better if you are home alone. Head into your bathroom, and set the tub up to stop the water from draining."],]},
                  aj, {s: ['Turn', 'the hot water', 'on', 'and', 'let', 'it', 'fill up.']}],
    [["RF_b",9], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "A bath is an excellent way to relieve stress in your life. It's a very simple process and recommended only if you have some time to yourself. Make sure to let everyone know that you are going to take a bath, and not to bother you. This works out much better if you are home alone. Head into your bathroom, and set the tub up to stop the water from draining."],]},
                  aj, {s: ['Turn', 'the hot water', 'on', 'and', 'let', 'this tub', 'fill up.']}],
    [["RF_c",9], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "A bath is an excellent way to relieve stress in your life. It's a very simple process and recommended only if you have some time to yourself. Make sure to let everyone know that you are going to take a bath, and not to bother you. This works out much better if you are home alone. Head into your bathroom, and set the tub up to stop the water from draining."],]},
                  aj, {s: ['Turn', 'the hot water', 'on', 'and', 'let', 'that tub', 'fill up.']}],
    [["RF_d",9], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "A bath is an excellent way to relieve stress in your life. It's a very simple process and recommended only if you have some time to yourself. Make sure to let everyone know that you are going to take a bath, and not to bother you. This works out much better if you are home alone. Head into your bathroom, and set the tub up to stop the water from draining."],]},
                  aj, {s: ['Turn', 'the hot water', 'on', 'and', 'let', 'the tub', 'fill up.']}],
    
    
    
    [["RF_a",10], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I woke up this morning and decided to go get my haircut. I normally go to a place that calls for a phone call in advance of arriving but this time I decided to go to a different place where I could just walk in. When I arrived I had to wait for about 10 minutes before someone could cut my hair, which was alright with me since I did not make an appointment or anything. When I got in the chair the lady cutting my hair asked me what kind of haircut I wanted and I told her short hair on the top with a buzz cut on the sides."],]},
                  aj, {s: ['She', 'told', 'me', 'that', 'would be', 'a great look', 'for me', 'and', 'I', 'agreed.']}],
    [["RF_b",10], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I woke up this morning and decided to go get my haircut. I normally go to a place that calls for a phone call in advance of arriving but this time I decided to go to a different place where I could just walk in. When I arrived I had to wait for about 10 minutes before someone could cut my hair, which was alright with me since I did not make an appointment or anything. When I got in the chair the lady cutting my hair asked me what kind of haircut I wanted and I told her short hair on the top with a buzz cut on the sides."],]},
                  aj, {s: ['This lady', 'told', 'me', 'that', 'would be', 'a great look', 'for me', 'and', 'I', 'agreed.']}],
    [["RF_c",10], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I woke up this morning and decided to go get my haircut. I normally go to a place that calls for a phone call in advance of arriving but this time I decided to go to a different place where I could just walk in. When I arrived I had to wait for about 10 minutes before someone could cut my hair, which was alright with me since I did not make an appointment or anything. When I got in the chair the lady cutting my hair asked me what kind of haircut I wanted and I told her short hair on the top with a buzz cut on the sides."],]},
                  aj, {s: ['That lady', 'told', 'me', 'that', 'would be', 'a great look', 'for me', 'and', 'I', 'agreed.']}],
    [["RF_d",10], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I woke up this morning and decided to go get my haircut. I normally go to a place that calls for a phone call in advance of arriving but this time I decided to go to a different place where I could just walk in. When I arrived I had to wait for about 10 minutes before someone could cut my hair, which was alright with me since I did not make an appointment or anything. When I got in the chair the lady cutting my hair asked me what kind of haircut I wanted and I told her short hair on the top with a buzz cut on the sides."],]},
                  aj, {s: ['The lady', 'told', 'me', 'that', 'would be', 'a great look', 'for me', 'and', 'I', 'agreed.']}],
    
    
    
    [["RF_a",11], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I took a trip to the beach by plane. I arrived at the airport early to go through the checkout process. I decided not to check any bags, so I simply got my ticket and then went through the security line. After security I went to my terminal to wait for the plane to board. Once we went through the boarding procedure I sat at my seat next to the window."],]},
                  aj, {s: ['Besides me', 'was', 'an older lady', 'who', 'made', 'small talk', 'with me', 'until', 'it', 'took off.']}],
    [["RF_b",11], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I took a trip to the beach by plane. I arrived at the airport early to go through the checkout process. I decided not to check any bags, so I simply got my ticket and then went through the security line. After security I went to my terminal to wait for the plane to board. Once we went through the boarding procedure I sat at my seat next to the window."],]},
                  aj, {s: ['Besides me', 'was', 'an older lady', 'who', 'made', 'small talk', 'with me', 'until', 'this plane', 'took off.']}],
    [["RF_c",11], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I took a trip to the beach by plane. I arrived at the airport early to go through the checkout process. I decided not to check any bags, so I simply got my ticket and then went through the security line. After security I went to my terminal to wait for the plane to board. Once we went through the boarding procedure I sat at my seat next to the window."],]},
                  aj, {s: ['Besides me', 'was', 'an older lady', 'who', 'made', 'small talk', 'with me', 'until', 'that plane', 'took off.']}],
    [["RF_d",11], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I took a trip to the beach by plane. I arrived at the airport early to go through the checkout process. I decided not to check any bags, so I simply got my ticket and then went through the security line. After security I went to my terminal to wait for the plane to board. Once we went through the boarding procedure I sat at my seat next to the window."],]},
                  aj, {s: ['Besides me', 'was', 'an older lady', 'who', 'made', 'small talk', 'with me', 'until', 'the plane', 'took off.']}],
    
    
    
    [["RF_a",12], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I went to the corner market with my list of things I needed to buy. I grabbed a shopping cart and wheeled it up and down the aisles. I started at aisle one and went through each one in order to make sure that I got everything I needed. Fruit and vegetables were placed in flimsy plastic bags that the market provided for me."],]},
                  aj, {s: ['I', 'got', 'eggs', 'and', 'placed', 'them', 'in', "the cart's basket", 'so', 'they', "wouldn't", 'get broken.']}],
    [["RF_b",12], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I went to the corner market with my list of things I needed to buy. I grabbed a shopping cart and wheeled it up and down the aisles. I started at aisle one and went through each one in order to make sure that I got everything I needed. Fruit and vegetables were placed in flimsy plastic bags that the market provided for me."],]},
                  aj, {s: ['I', 'got', 'eggs', 'and', 'placed', 'them', 'in', "the cart's basket", 'so', 'these eggs', "wouldn't", 'get broken.']}],
    [["RF_c",12], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I went to the corner market with my list of things I needed to buy. I grabbed a shopping cart and wheeled it up and down the aisles. I started at aisle one and went through each one in order to make sure that I got everything I needed. Fruit and vegetables were placed in flimsy plastic bags that the market provided for me."],]},
                  aj, {s: ['I', 'got', 'eggs', 'and', 'placed', 'them', 'in', "the cart's basket", 'so', 'those eggs', "wouldn't", 'get broken.']}],
    [["RF_d",12], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I went to the corner market with my list of things I needed to buy. I grabbed a shopping cart and wheeled it up and down the aisles. I started at aisle one and went through each one in order to make sure that I got everything I needed. Fruit and vegetables were placed in flimsy plastic bags that the market provided for me."],]},
                  aj, {s: ['I', 'got', 'eggs', 'and', 'placed', 'them', 'in', "the cart's basket", 'so', 'the eggs', "wouldn't", 'get broken.']}],
    
    
    
    [["RF_a",13], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Sometimes my hair gets too long, so I have to get it cut. I go to a hair salon to get my hair cut. I call the salon to schedule an appointment for a specific time and day. They tell me when my appointment is, so I make sure that I have free time that day. When I get to the salon, they call my name when they are ready to help me."],]},
                  aj, {s: ['The stylist', 'washes', 'my hair', 'for me,', 'and', 'she', 'asks', "me", 'what kind of', 'haircut', 'I', 'would like.']}],
    [["RF_b",13], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Sometimes my hair gets too long, so I have to get it cut. I go to a hair salon to get my hair cut. I call the salon to schedule an appointment for a specific time and day. They tell me when my appointment is, so I make sure that I have free time that day. When I get to the salon, they call my name when they are ready to help me."],]},
                  aj, {s: ['The stylist', 'washes', 'my hair', 'for me,', 'and', 'this stylist', 'asks', "me", 'what kind of', 'haircut', 'I', 'would like.']}],
    [["RF_c",13], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Sometimes my hair gets too long, so I have to get it cut. I go to a hair salon to get my hair cut. I call the salon to schedule an appointment for a specific time and day. They tell me when my appointment is, so I make sure that I have free time that day. When I get to the salon, they call my name when they are ready to help me."],]},
                  aj, {s: ['The stylist', 'washes', 'my hair', 'for me,', 'and', 'that stylist', 'asks', "me", 'what kind of', 'haircut', 'I', 'would like.']}],
    [["RF_d",13], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Sometimes my hair gets too long, so I have to get it cut. I go to a hair salon to get my hair cut. I call the salon to schedule an appointment for a specific time and day. They tell me when my appointment is, so I make sure that I have free time that day. When I get to the salon, they call my name when they are ready to help me."],]},
                  aj, {s: ['The stylist', 'washes', 'my hair', 'for me,', 'and', 'the stylist', 'asks', "me", 'what kind of', 'haircut', 'I', 'would like.']}],
    
    
    
    [["RF_a",14], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was going to go on a bike ride with a friend. I pulled my bike out of the garage only to discover I had a flat tire. I wasn't sure if the flat was just from a slow leak or a bad tube."],]},
                  aj, {s: ['If', 'it', 'was', 'from', 'a bad tube', 'I', 'would', "have to", 'use', 'tools', 'to', 'take', 'it', 'completely off.']}],
    [["RF_b",14], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was going to go on a bike ride with a friend. I pulled my bike out of the garage only to discover I had a flat tire. I wasn't sure if the flat was just from a slow leak or a bad tube."],]},
                  aj, {s: ['If', 'it', 'was', 'from', 'a bad tube', 'I', 'would', "have to", 'use', 'tools', 'to', 'take', 'this tire', 'completely off.']}],
    [["RF_c",14], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was going to go on a bike ride with a friend. I pulled my bike out of the garage only to discover I had a flat tire. I wasn't sure if the flat was just from a slow leak or a bad tube."],]},
                  aj, {s: ['If', 'it', 'was', 'from', 'a bad tube', 'I', 'would', "have to", 'use', 'tools', 'to', 'take', 'that tire', 'completely off.']}],
    [["RF_d",14], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was going to go on a bike ride with a friend. I pulled my bike out of the garage only to discover I had a flat tire. I wasn't sure if the flat was just from a slow leak or a bad tube."],]},
                  aj, {s: ['If', 'it', 'was', 'from', 'a bad tube', 'I', 'would', "have to", 'use', 'tools', 'to', 'take', 'the tire', 'completely off.']}],
    
    
    
    [["RF_a",15], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Riding a public bus isn't something I look forward to doing. When I was a teenager some friends convinced me that it would be fun to jump on a bus and ride around. Having done so, I disagree, it isn't fun. However, for some people the bus is the only mode of transportation available. Riding the bus does require a little research."],]},
                  aj, {s: ['You', 'have to', 'know', 'which line', 'you', 'are ', "riding,", 'whether', 'it', 'is', 'an express', 'or', 'whether', 'it', 'will be', 'making', 'many stops.']}],
    [["RF_b",15], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Riding a public bus isn't something I look forward to doing. When I was a teenager some friends convinced me that it would be fun to jump on a bus and ride around. Having done so, I disagree, it isn't fun. However, for some people the bus is the only mode of transportation available. Riding the bus does require a little research."],]},
                  aj, {s: ['You', 'have to', 'know', 'which line', 'you', 'are ', "riding,", 'whether', 'this line', 'is', 'an express', 'or', 'whether', 'it', 'will be', 'making', 'many stops.']}],
    [["RF_c",15], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Riding a public bus isn't something I look forward to doing. When I was a teenager some friends convinced me that it would be fun to jump on a bus and ride around. Having done so, I disagree, it isn't fun. However, for some people the bus is the only mode of transportation available. Riding the bus does require a little research."],]},
                  aj, {s: ['You', 'have to', 'know', 'which line', 'you', 'are ', "riding,", 'whether', 'that line', 'is', 'an express', 'or', 'whether', 'it', 'will be', 'making', 'many stops.']}],
    [["RF_d",15], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Riding a public bus isn't something I look forward to doing. When I was a teenager some friends convinced me that it would be fun to jump on a bus and ride around. Having done so, I disagree, it isn't fun. However, for some people the bus is the only mode of transportation available. Riding the bus does require a little research."],]},
                  aj, {s: ['You', 'have to', 'know', 'which line', 'you', 'are ', "riding,", 'whether', 'the line', 'is', 'an express', 'or', 'whether', 'it', 'will be', 'making', 'many stops.']}],
    
    
    
    [["RF_a",16], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I bought a ticket for a train ride to the city. I made sure I was at the station at least 15 minutes early so that I would not miss the train. After waiting for a few minutes, my train was ready to be boarded. I lined up with the other passengers and gave my ticket to the lady at the counter."],]},
                  aj, {s: ['We', 'all', 'boarded', 'it', 'in', 'an orderly fashion', "and", 'waited', 'until', 'it', 'was', 'time', 'to depart.']}],
    [["RF_b",16], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I bought a ticket for a train ride to the city. I made sure I was at the station at least 15 minutes early so that I would not miss the train. After waiting for a few minutes, my train was ready to be boarded. I lined up with the other passengers and gave my ticket to the lady at the counter."],]},
                  aj, {s: ['We', 'all', 'boarded', 'this train', 'in', 'an orderly fashion', "and", 'waited', 'until', 'it', 'was', 'time', 'to depart.']}],
    [["RF_c",16], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I bought a ticket for a train ride to the city. I made sure I was at the station at least 15 minutes early so that I would not miss the train. After waiting for a few minutes, my train was ready to be boarded. I lined up with the other passengers and gave my ticket to the lady at the counter."],]},
                  aj, {s: ['We', 'all', 'boarded', 'that train', 'in', 'an orderly fashion', "and", 'waited', 'until', 'it', 'was', 'time', 'to depart.']}],
    [["RF_d",16], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I bought a ticket for a train ride to the city. I made sure I was at the station at least 15 minutes early so that I would not miss the train. After waiting for a few minutes, my train was ready to be boarded. I lined up with the other passengers and gave my ticket to the lady at the counter."],]},
                  aj, {s: ['We', 'all', 'boarded', 'the train', 'in', 'an orderly fashion', "and", 'waited', 'until', 'it', 'was', 'time', 'to depart.']}],
    
    
    
    [["RF_a",17], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "For a school assignment I needed to find a book from the library. I went to the library after class and looked the book up on the computer which had the library's catalogue. The book was upstairs, so I went there and followed the call numbers until I found what I was looking for. I then went back downstairs to the circulation desk."],]},
                  aj, {s: ['I', 'placed', 'it', 'on the counter', 'and', 'the friendly librarian', "swiped", 'my library card', 'and', 'then', 'scanned', 'the book.']}],
    [["RF_b",17], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "For a school assignment I needed to find a book from the library. I went to the library after class and looked the book up on the computer which had the library's catalogue. The book was upstairs, so I went there and followed the call numbers until I found what I was looking for. I then went back downstairs to the circulation desk."],]},
                  aj, {s: ['I', 'placed', 'this book', 'on the counter', 'and', 'the friendly librarian', "swiped", 'my library card', 'and', 'then', 'scanned', 'the book.']}],
    [["RF_c",17], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "For a school assignment I needed to find a book from the library. I went to the library after class and looked the book up on the computer which had the library's catalogue. The book was upstairs, so I went there and followed the call numbers until I found what I was looking for. I then went back downstairs to the circulation desk."],]},
                  aj, {s: ['I', 'placed', 'that book', 'on the counter', 'and', 'the friendly librarian', "swiped", 'my library card', 'and', 'then', 'scanned', 'the book.']}],
    [["RF_d",17], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "For a school assignment I needed to find a book from the library. I went to the library after class and looked the book up on the computer which had the library's catalogue. The book was upstairs, so I went there and followed the call numbers until I found what I was looking for. I then went back downstairs to the circulation desk."],]},
                  aj, {s: ['I', 'placed', 'the book', 'on the counter', 'and', 'the friendly librarian', "swiped", 'my library card', 'and', 'then', 'scanned', 'the book.']}],
    
    
    
    [["RF_a",18], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "The other day I went to the grocery store to buy enough food for me to eat for several days. Before I left, I thought about what I might want to eat over the next few days. I looked through my recipes and decided on what sort of food to buy. I got a piece of paper and a pencil and wrote down all the food that I would need to buy to make these meals. Once I felt my list was complete, I gathered some bags and drove to the store."],]},
                  aj, {s: ['I', 'took', 'a shopping cart', 'and', 'pushed', 'it', 'into the store.']}],
    [["RF_b",18], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "The other day I went to the grocery store to buy enough food for me to eat for several days. Before I left, I thought about what I might want to eat over the next few days. I looked through my recipes and decided on what sort of food to buy. I got a piece of paper and a pencil and wrote down all the food that I would need to buy to make these meals. Once I felt my list was complete, I gathered some bags and drove to the store."],]},
                  aj, {s: ['I', 'took', 'a shopping cart', 'and', 'pushed', 'this cart', 'into the store.']}],
    [["RF_c",18], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "The other day I went to the grocery store to buy enough food for me to eat for several days. Before I left, I thought about what I might want to eat over the next few days. I looked through my recipes and decided on what sort of food to buy. I got a piece of paper and a pencil and wrote down all the food that I would need to buy to make these meals. Once I felt my list was complete, I gathered some bags and drove to the store."],]},
                  aj, {s: ['I', 'took', 'a shopping cart', 'and', 'pushed', 'that cart', 'into the store.']}],
    [["RF_d",18], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "The other day I went to the grocery store to buy enough food for me to eat for several days. Before I left, I thought about what I might want to eat over the next few days. I looked through my recipes and decided on what sort of food to buy. I got a piece of paper and a pencil and wrote down all the food that I would need to buy to make these meals. Once I felt my list was complete, I gathered some bags and drove to the store."],]},
                  aj, {s: ['I', 'took', 'a shopping cart', 'and', 'pushed', 'the cart', 'into the store.']}],
    
    
    
    [["RF_a",19], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last year, I was outside working in the garden when I realized that my front yard would look much nicer if I planted a tree to provide it with a little shade. I went to the gardeners store down the street and pick up some seeds to plant my tree. I decided on a maple tree as that would look nice and make a perfect amount of shade for my front lawn."],]},
                  aj, {s: ['I', 'dug', 'a small hole', 'where', 'I', 'wanted', 'to plant', 'it', 'and', 'put', 'the seeds', 'in place.']}],
    [["RF_b",19], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last year, I was outside working in the garden when I realized that my front yard would look much nicer if I planted a tree to provide it with a little shade. I went to the gardeners store down the street and pick up some seeds to plant my tree. I decided on a maple tree as that would look nice and make a perfect amount of shade for my front lawn."],]},
                  aj, {s: ['I', 'dug', 'a small hole', 'where', 'I', 'wanted', 'to plant', 'this tree', 'and', 'put', 'the seeds', 'in place.']}],
    [["RF_c",19], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last year, I was outside working in the garden when I realized that my front yard would look much nicer if I planted a tree to provide it with a little shade. I went to the gardeners store down the street and pick up some seeds to plant my tree. I decided on a maple tree as that would look nice and make a perfect amount of shade for my front lawn."],]},
                  aj, {s: ['I', 'dug', 'a small hole', 'where', 'I', 'wanted', 'to plant', 'that tree', 'and', 'put', 'the seeds', 'in place.']}],
    [["RF_d",19], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Last year, I was outside working in the garden when I realized that my front yard would look much nicer if I planted a tree to provide it with a little shade. I went to the gardeners store down the street and pick up some seeds to plant my tree. I decided on a maple tree as that would look nice and make a perfect amount of shade for my front lawn."],]},
                  aj, {s: ['I', 'dug', 'a small hole', 'where', 'I', 'wanted', 'to plant', 'the tree', 'and', 'put', 'the seeds', 'in place.']}],
    
    
    
    [["RF_a",20], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Today, in Rich's Kitchen we'll learn about the fine attributes of baking a cake. Since I am not a phenomenal baker we will be assisted by the use of Little Debbie in using one of their fine cake mixes."],]},
                  aj, {s: ['In order to', 'properly make', 'it', 'we', 'will', 'need', 'some vegetable oil', 'and', 'a couple of eggs.']}],
    [["RF_b",20], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Today, in Rich's Kitchen we'll learn about the fine attributes of baking a cake. Since I am not a phenomenal baker we will be assisted by the use of Little Debbie in using one of their fine cake mixes."],]},
                  aj, {s: ['In order to', 'properly make', 'this cake', 'we', 'will', 'need', 'some vegetable oil', 'and', 'a couple of eggs.']}],
    [["RF_c",20], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Today, in Rich's Kitchen we'll learn about the fine attributes of baking a cake. Since I am not a phenomenal baker we will be assisted by the use of Little Debbie in using one of their fine cake mixes."],]},
                  aj, {s: ['In order to', 'properly make', 'that cake', 'we', 'will', 'need', 'some vegetable oil', 'and', 'a couple of eggs.']}],
    [["RF_d",20], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Today, in Rich's Kitchen we'll learn about the fine attributes of baking a cake. Since I am not a phenomenal baker we will be assisted by the use of Little Debbie in using one of their fine cake mixes."],]},
                  aj, {s: ['In order to', 'properly make', 'the cake', 'we', 'will', 'need', 'some vegetable oil', 'and', 'a couple of eggs.']}],
    
    
    
    [["f1", 21], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I take showers in the morning, but I enjoy taking a bath in the evening. I find it relaxes me and helps me to sleep better. I have a bottle of pink bubble bath that I like to use when I bathe. I begin by making sure the water will stay in the tub, by flipping up the lever below the faucet."],]},
                  aj, {s: ['It', 'prevents', 'the water', 'from', 'going down', 'the drain.']}],
    
    
    
    [["f1", 22], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was riding down the sidewalk and noticed that my bicycle tire had gone flat. I took my bike home and attempted to put air in the tire."],]},
                  aj, {s: ['I', 'noticed', 'a hissing hole', 'coming from', 'the tire', 'and', 'realized', 'that', 'it', 'had', 'a hole', 'in it.']}],
    
    
   
    [["f1", 23], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "My car is in the repair shop so I had to take the bus to work yesterday. The first thing I did was walk to the bus stop at the corner and then waited for the bus to arrive."],]},
                  aj, {s: ['I', 'watched', 'the signs', 'on the front of', 'the buses', 'as', 'they', 'approached', 'so', 'I', 'would know', 'which one', 'to take.']}],
    
    
    
    [["f1", 24], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I wanted to bake a cake. I got the cake mix, eggs, oil, measuring cups and a baking pan from my pantry. I got a mixing bowl from my cupboard and a large wooden spoon from my drawer. I preheated the oven to 350 degrees. I poured the cake mix from the package into the bowl."],]},
                  aj, {s: ['I', 'added', 'two eggs,', 'and', 'used', 'my measuring cups', 'to add', 'oil', 'and', 'water', 'to the bowl.']}],
    
    
    
    [["f1", 25], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I was excited to be going to Cancun in two weeks. I brought my tickets a few months before, and when the day arrived, I simply printed out the ticket from my computer. I brought my two suitcases filled with clothes and necessities, along with my visa and other important travel documents. Once I got to the airport, I passed by security and they checked my bags for anything that was illegal or dangerous."],]},
                  aj, {s: ['Once', 'I', 'got past', 'the checkpoint,', 'I', 'waited', 'at a terminal', 'for an hour.']}],
    
    
    
    [["f1", 26], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I went grocery shopping today. I made a list of things that I needed before I left my house. When I got to the grocery store, I walked in the door and got a shopping cart."],]},
                  aj, {s: ['The next thing', 'I', 'did', 'was', 'looking at', 'my list', 'to see', 'which item', 'I', 'needed to find.']}],
    
    
    
    [["f1", 27], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I decided it was time to get my hair cut. I wanted a new style and a shorter length."],]},
                  aj, {s: ['I', 'called', 'the hair salon', 'and', 'made', 'an appointment.']}],
    
    
    
    [["f1", 28], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I had finished reading a very good book, and wanted to get a new one to read. I went to the library in my town. They have rows and rows of books, some are old , and some are very new. I wanted to get a new book that my favorite author had written not too long ago."],]},
                  aj, {s: ['I', 'was hopinng', 'that', 'they', 'would', 'have', 'it,', 'but', 'it', 'was', 'possible', 'it', 'was', 'on loan', 'to', 'another library patron.']}],
    
    
    
    [["f1", 29], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I wanted to take a train trip to New York City to visit my sister. I went to the Amtrak station in Boston and found the ticket office. As I stood in line, I looked at the board showing all the departure times to New York."],]},
                  aj, {s: ['Lucky for me,', 'there', 'was', 'a train', 'leaving', 'in', 'half an hour.']}],
    
    
    
    [["f1", 30], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I bought a tree from my local plant supply store. It was a small sapling with only a few branches on it. I took a shovel out of my garage and found a good place for the tree next to my house. I began digging a hole with the shovel for a few minutes until the hole was about one and a half feet deep."],]},
                  aj, {s: ['I', 'set down', 'the shovel', 'and', 'removed', 'the plastic wrap', 'from', "the tree's", 'roots.']}],
    
    
    
    [["f2", 31], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I took a warm bath this evening to relax. I began by drawing myself a bath. I turned the water on and made sure that the temperature was not too hot and not too cold."],]},
                  aj, {s: ['In the mean time,', 'I', 'put on', 'all of my clothes', 'to prepare for', 'my bath.']}],
    
    
    
    [["f2", 32], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Some years ago, I used my bike to get around town a lot. Of course, came the time when you have to make repairs. I found out a lot about bicycle tires during this time."],]},
                  aj, {s: ['My tire', 'had', 'a leak', 'but', 'I', 'bought', 'a repair kit.']}],
    
    
    
    [["f2", 33], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday I rode a public bus to go to work. I woke up early because the bus is very very very unreliable. I packed the items that I needed for the day in my backpack. I double checked to make sure I had everything, including my one dollar and twenty five cents bus fare. I walked out the door and started heading in the direction of the bus stop."],]},
                  aj, {s: ['I', 'walked', 'to the bus stop', 'as quickly as I could', 'and', 'then', 'waited', 'for', 'the train.']}],


    
    [["f2", 34], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "Yesterday I found a great recipe for a chocolate cake with peanut butter swirls. I went to the store to buy all the ingredients. I had to get eggs, sugar, milk and peanut butter. I got out a big mixing bowl and mixed all the ingredients up with a big wooden spoon. I preheated the oven while I was mixing everything together."],]},
                  aj, {s: ['I', 'had to', 'wait', 'a few minutes', 'for', 'an oven', 'to be ready', 'for', 'the concoction', 'sitting', 'on my counter.']}],

    

    [["f2", 35], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I waited in a seating area near the gate at the airport. I could see the huge jetliner out the window. I looked at my ticket and saw that I was in Group 3. When the gate attendant called my number I showed her my ticket and boarded the plane. I found my seat, 22D, and sat down, putting the small bag I had packed under the seat in front of me."],]},
                  aj, {s: ['Before', 'everyone', 'was', 'on the plane', 'they', 'shut', 'the door.']}], 

    
    
    [["f2", 36], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "While preparing a dinner of Spaghetti and Meatballs tonight, I realized I needed to go grocery shopping to restock my refrigerator. It was still early and the store wasn't close so I made a trip to the store."],]},
                  aj, {s: ['I', 'grabbed', 'this shopping cart', 'because', "I'm", 'out of', 'eggs,', 'bread,', 'orange juice,', 'milk', 'etc.']}], 

    
    
    [["f2", 37], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "On Saturday I went to the hair salon to get a haircut. First, I called the store on Friday to make an appointment for 1 PM on Saturday. I arrived at the salon at 1 o'clock on Saturday and told them I had an appointment."],]},
                  aj, {s: ['That lady', 'immediately', 'showed', 'me', 'to a seat.']}],
    
    
    
    [["f2", 38], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I needed to read a book for my history class, so I decided to see if the local library had a copy. I went to the library's website and searched for the book."],]},
                  aj, {s: ['I', 'saw', 'that', 'they', 'had', 'it', 'in stock,', 'but', 'I', 'walked to', 'the library.']}],
    
    

    [["f2", 39], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "I wanted to take a trip on a train. I thought it would be fun to travel through the countryside. I called the train directory and booked a ticket for a country journey day trip. I arrived at the train station, full of excitement. I handed my ticket to the conductor."],]},
                  aj, {s: ['I', 'found', 'my seat', 'which', 'was', 'near a window,', 'so', 'I', 'would not', 'be able to', 'take in', 'all the sights', 'as', 'the train', 'traveled along.']}],
    
    
    
    [["f2", 40], "Message", {consentRequired: false, transfer: "click",
                    html: ["div",
                          ["p", "My parents had purchased a new lemon tree that they wanted to plant, so I went to their house to help them plant it. My dad already had a place picked out to put the tree, so we went to work."],]},
                  aj, {s: ['We', 'had to', 'dig', 'a fairly small hole', 'and', 'it', 'took', 'several hours.']}],
    

];
