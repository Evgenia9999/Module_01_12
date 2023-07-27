const randomNum = Math.round(Math.random() * 100);
console.log('randomNum: ', randomNum);

const foo = () => {

    const userNum = prompt('Введите число от 0 до 100');
    console.log('userNum: ', userNum);
    console.log(typeof userNum);

    if (userNum === null) {
    return alert('Отмена');
    } else if (randomNum < userNum) {
    alert('Меньше!');
    } else if (userNum < randomNum) {
    alert('Больше!');
    } 
    
    if (userNum != randomNum) {
        foo();
    } else if (userNum == randomNum) {
        return alert('Правильно!')
    }
};
foo();