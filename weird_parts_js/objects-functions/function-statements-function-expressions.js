// Expression
// A unit of code that results in a value

// It doesn't have to save to a variable

// function a() {
//     console.log(this);
// }

// var b = function() {
//     console.log(this);
// };

// a();
// b();

var c = {
    name: 'The c object',
    log() {
        var self = this;

        self.name = 'Updated C Object';
        console.log(self);

        var setname = function(name) {
            self.name = name;
            console.log(self);
        }

        setname('Updated again! The c object');
    }
}

c.log();
