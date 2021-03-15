// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: () => {
//         console.log('draw')
//     }
// };

// circle.draw();



// Factory Function
function createCircle(radius) {
    return {
        radius, // radius = radius
        draw: () => console.log('draw')
    }
}

const circle = createCircle(1);
circle.draw();



// Constructor Function
const Circle = radius => {
    this.radius = radius
}


const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(s2);



const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: () => `${this.title} was written by ${this.author} in ${this.year}`
};

const book2 = {
    title: 'Book Two',
    author: 'John Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSummary());

console.log(Object.values(book2));
console.log(Object.keys(book2));







