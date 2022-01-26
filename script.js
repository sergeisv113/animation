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
function myAnimation() {
    //el кот будет двиг
    const elem = document.querySelector('.box');
    //start position
    let pos = 0;
 //запуск плавной анимации
const id = setInterval(frame, 10);

    //func запуск с интервал
    function frame() {
        if (pos == 300) {//сравниваем с конечной позицией
            clearInterval(id);
        } else  {
            pos++;
            elem.style.top = pos + 'px';//смещение
            elem.style.left = pos + 'px';


        }
    }
}
//start обработчик событ
btn.addEventListener('click', myAnimation);
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
