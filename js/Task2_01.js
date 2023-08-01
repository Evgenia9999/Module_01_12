// 'use strict';

const rectangle = {

    _width: 5,
    _height: 5,
    
    get width() {
    },

    set width(value1) {
            
        if (typeof value1 === 'number'){
            this._width = value1;
        }
    },

    get height() {
    },

    set height(value2) {
    
        if (typeof value2 === 'number'){
            this._height = value2;
        }
    },

    get area () {
    return this._width * this._height + 'см';
    },

    get perimeter () {
    return (this._width + this._height) * 2  + 'см';;
    }, 
}


rectangle.width = 3;
rectangle.height = '';

console.log(rectangle._width);
console.log(typeof rectangle._width);
console.log(rectangle._height);
console.log(typeof rectangle._height);
console.log(rectangle.area);
console.log(rectangle.perimeter);










