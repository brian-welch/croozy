'use strict';

export window.levelUp = (function(){
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


// window.buildObject = (function () {
//     "use strict";
//     let a = {};
//     function inner(b) {
//         if (b == null) {
//             return a;
//         } else {
//             let c = '';
//             let d = '';
//             c = Object.keys(b).toString();
//             d = Object.values(b).toString();
//             a[c] = d;
//             return a;
//         }
//     }
//     return inner;
// })();

export window.buildAnswerArray = (function () {
    "use strict";
    let a = [];
    function inner(b) {
        if (b == null) {
            return a;
        } else {
            a.push(b);
            // return a;
        }
    }
    return inner;
})();