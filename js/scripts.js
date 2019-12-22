import {valueArray} from './constants.js';
import {displayProfile} from './profile.js';

import * as linkFunctions from './linkFunctions.js';
import * as questionFunctions from './questionFunctions.js';

window.levelUp = (function(){
    "use strict";
    let a = 0;
    function inner(b) {
        if (b == null) {
            return a;
        } else {
            a = a + b;
            return a;
        }
    }
    return inner;
})();

window.buildAnswerArray = (function () {
    "use strict";
    let a = [];
    function inner(b) {
        if (b == null) {
            return a;
        } else {
            a.push(b);
        }
        console.log("window.buildAnswerArray = ");
        console.log(a);
    }
    return inner;
})();

function wrongURL() {
    alert("\n\nIt appears you hav a bad URL link.\n\nPlease make sure you typed the correct URL in your web browser.\n\n");
};


$( document ).ready(function() {

    let profileString = window.location.search.substring(1);

    if (profileString == 0) {
        $('#question-answer-container').show(0);
        questionFunctions.buttonClickEventListener();
    } else {
        $('#question-answer-container').remove();

        let queryObj = {};
        queryObj[profileString.split('=')[0]] = profileString.split('=')[1];

        if (profileString.split('=')[0] != "profile") {
            wrongURL();
        } else if (!queryObj.profile) {
            wrongURL();
        } else if (queryObj.profile.length < 7) {
            wrongURL();
        } else {
            let answerArray = queryObj.profile.split('');

            for (let i in answerArray) {
                let j = parseInt(i) + 1;

                if (!valueArray[j].includes(answerArray[i])){
                    wrongURL();
                    break;
                }
            }

            displayProfile(profileString);
            linkFunctions.renderLinkIcons();
            linkFunctions.clickToCopyEmail();
            linkFunctions.clickToCopyPhoneNumber();
            linkFunctions.clickToCopyChatUserName();
            linkFunctions.webLinkObfuscation();
        }
    }
});