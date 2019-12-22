'use strict';

import * as constants from './constants.js';

function getNextQuestion(containerObj, buttonObj){
    let level = window.levelUp(1);
    let questionBox = containerObj.children()[0];
    let buttonBox = containerObj.children()[1];

    questionBox.innerHTML = `<p>${constants.questionArrayEn[level]}</p>`;
    buttonBox.innerHTML = '<span class="lots-little">LOTS</span>';
    for (let answer in constants.buttonText) {
        let i = 0;
        buttonBox.innerHTML += `<button class="option-button" data-answer-value="${constants.valueArray[level][i]}">${constants.buttonText[answer]}</button>`;
        i++;
    }
    buttonBox.innerHTML += '<span class="lots-little">LITTLE</span>';
    containerObj.css(constants.startCss);
    containerObj.delay(100).fadeIn(1);

    buttonClickEventListener();
};

export function buttonClickEventListener(){
    $(".option-button").on('click', function(event){
        let buttonObj      = $(this);
        let containerObj   = $(this).parent().parent();
        let flyOffCssIndex = Math.floor((Math.random()*4));
        let addedCss       = constants.flyOffCssArray[flyOffCssIndex];

        if (window.levelUp() > 0) {
            window.buildAnswerArray(buttonObj[0].dataset.answerValue);
        }

        containerObj.css(addedCss);
        containerObj.delay(1000).hide(1, function() {
            if (window.levelUp() < 7) {
                getNextQuestion(containerObj, buttonObj);
            } else {
                alert("that was the last question")
            }
        });
    });
};