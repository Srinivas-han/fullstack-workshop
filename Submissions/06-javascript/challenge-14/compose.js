const compose = (...fns) => {
    return (initialValue) =>
        fns.reduceRight((value, fn) => fn(value), initialValue);
};


const pipe = (...fns) => {
    return (initialValue) =>
        fns.reduce((value, fn) => fn(value), initialValue);
};



const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;


const composed = compose(addOne, double, square);
console.log(composed(3));


const piped = pipe(square, double, addOne);
console.log(piped(3));
