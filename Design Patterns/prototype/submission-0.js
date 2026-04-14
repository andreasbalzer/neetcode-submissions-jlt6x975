class Shape {
    /**
     * @return {Shape}
     */
    clone() {}
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const copy = new Rectangle();
        copy.height = this.height;
        copy.width = this.width;
        return copy;
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const copy = new Square();
        copy.length = this.length;
        return copy;
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        // Write your code here
        return shapes.map((shape) => shape.clone());
    }
}
