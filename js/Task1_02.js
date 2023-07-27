const foo = (arr) => {
    const random = Math.round(Math.random() * 10);
    arr.push(random);
    let sum = arr.reduce((acc, item, i,) => {
    return acc + item;
    }, random);

    if (sum < 50) {
    foo(arr);
    } else {
        return console.log(arr);    
    }
};
foo([1,2,3]);