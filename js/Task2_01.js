// 'use strict';

const rectangle = {

    _width: 5,
    _height: 5,
    
    get width() {
    },

    set width(value1) {
            
        if (value1 === 'string'){
            return this._width;
        } else {
            this._width = value1;
            console.log(1); 
        }
    },

    get height() {
    },

    set height(value2) {
    
        if (value2 === 'string'){
            return this._height;
        } else {
            this._height = value2;
            console.log(1); 
        } 
    },

    get area () {
    return this._width * this._height + 'см';
    },

    get perimeter () {
    return (this._width + this._height) * 2  + 'см';;
    }, 
}


rectangle._width = 4;
rectangle._height = 3;

console.log(rectangle._width);
console.log(typeof rectangle._width);
console.log(rectangle._height);
console.log(typeof rectangle._height);
console.log(rectangle.area);
console.log(rectangle.perimeter);









