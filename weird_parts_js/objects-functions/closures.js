// function greet(whattosay) {
//     return function(name) {
//         console.log(whattosay  + ' ' + name);
//     }
// }

// var sayHi = greet('Hi');

// sayHi('Mark');


// let greet = (whattosay) => {
//     return (name) => {
//         console.log(whattosay + ' ' + name);
//     }
// };

// let sayHi = greet('Hi');

// sayHi('Mark');

// sayHi('John');

// greet('Hi')('Mark');

// var testing = 'testing';
// (function() {
//     var test = 'test';
//     console.log(testing);
// }());


function buildFunctions() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }

    return arr;
}

function buildFunctions2() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

var fs = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();
