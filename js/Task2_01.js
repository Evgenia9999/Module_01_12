// 'use strict'

const rectangle = {

    width: 5,
    height: 5,
    
    set width(value1) {
            
        if (value1 === 'string'){
        return alert('Введите число для width');
        }
        this.width = value1;
        console.log(1); 
        },
    set height(value2) {
    
        if (value2 === 'string'){
        return alert('Введите число для height');
        }
        this.height = value2;
        console.log(1);  
    },

    get area () {
    return this.width * this.height + 'см';
    },

    get perimeter () {
    return (this.width + this.height) * 2  + 'см';;
    }, 
}


rectangle.width = 4;
rectangle.height = 3;

console.log(rectangle.width);
console.log(typeof rectangle.width);
console.log(rectangle.height);
console.log(typeof rectangle.height);
console.log(rectangle.area);
console.log(rectangle.perimeter);











// rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника

// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"

// По умолчанию значения высоты и ширины заданы 5 см

