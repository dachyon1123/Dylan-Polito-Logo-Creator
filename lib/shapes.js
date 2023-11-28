class Shape {
    constructor(text, textColor) {
        this.height = '300px';
        this.width ='300px';
        this.text = text;
        this.textColor = textColor;
    }
    
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(text, textColor)
        this.color= color
    }
    createSVG(content) {
        let newSVG = `
<svg width="300" height="200">
    <polygon points="150,0 300,300 0,300" fill=${content.shapeColor} />
    <text x="31%" y="90%" font-family="Veradana" font-size="60" fill=${content.textColor}> ${content.text}</text>
</svg>
`
        return newSVG
    }
}

class Rectangle extends Shape {
    constructor(color, text, textColor) {
        super(text, textColor)
        this.color= color
    }
    createSVG(content) {
        let newSVG = `
<svg width="300" height="200">
    <rect height="200" width="300" fill=${content.shapeColor} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Veradana" font-size="80" fill=${content.textColor}> ${content.text}</text>
</svg>
`
        return newSVG
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(text, textColor)
        this.color= color
    }
    createSVG(content) {
        let newSVG = `
<svg width="300" height="200">
    <circle cx="150" cy="100" r="100" fill=${content.shapeColor} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Veradana" font-size="80" fill=${content.textColor}> ${content.text}</text>
</svg>
`
        return newSVG
    }
}

module.exports = { Shape, Triangle,  Rectangle, Circle } 




