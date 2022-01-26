/*
const timerId = setTimeout(function () {
    console.log('hello')
}, 2000);
*/

/*
const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, 'hello');*/

const  btn = document.querySelector('.btn');
 let timerId;//запис чтобы использ вн ф-ции
i = 0// колич раз запущ ф-ций
//ф-ция анимации


/*
btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    const timerId = setInterval(logger, 500);

})
*/
/*
function logger() {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++
};
*/
//рекурсивный вызов setTimeout.Ждет полное выполнен ф-ции
/*
let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);*/
