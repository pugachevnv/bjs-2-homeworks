// Задание 1. Форматтер чисел
function parseCount(count) {
    const resultParse = Number.parseFloat(count);
    if (isNaN(resultParse)) {
        throw new Error ('Невалидное значение');
    }
    return resultParse;
}

function validateCount (count) {
    try {
        return parseCount(count);
    } catch (Error) {
        return Error;
    }
}

// Задание 2. Треугольник
class Triangle{
    constructor(a, b, c) {
        
        if((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c
    }

    get area() {
        const halfPerimeter = this.perimeter / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
        }
    }
}