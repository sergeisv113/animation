/*
const timerId = setTimeout(function () {
    console.log('hello')
}, 2000);
*/

/*
const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, 'hello');*/

const timerId = setTimeout(logger, 2000);
clearInterval(timerId);
function logger() {
    console.log('hello');
};
