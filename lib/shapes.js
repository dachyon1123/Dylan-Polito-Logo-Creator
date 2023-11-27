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
<svg width="300" height="300">
    <polygon points="150,0 300,300 0,300" fill=${content.shapeColor} />
    <text x="50" y="100" font-family="Veradana font-size="20" fill=${content.textColor}> ${content.text}</text>
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
<svg width="300" height="300">
    <rect height="300" width="300" fill=${content.shapeColor} />
    <text x="50" y="100" font-family="Veradana font-size="20" fill=${content.textColor}> ${content.text}</text>
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
<svg width="300" height="300">
    <circle cx="150" cy="150" r="50" fill=${content.shapeColor} />
    <text x="50" y="100" font-family="Veradana font-size="20" fill=${content.textColor}> ${content.text}</text>
</svg>
`
        return newSVG
    }
}

module.exports = { Shape, Triangle,  Rectangle, Circle } 




