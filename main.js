// Cardinal points object
class cardinalPoints {

    constructor(mainDirection, leftDirection, rightDirection) {
        this.mainDirection = mainDirection;
        this.leftDirection = leftDirection;
        this.rightDirection = rightDirection;
    }

}

let north = new cardinalPoints("N", "W", "E");
let east = new cardinalPoints("E", "N", "S");
let south = new cardinalPoints("S", "E", "W");
let west = new cardinalPoints("W", "S", "N");



/* Get width, height and direction values, transform in integer */

let forWidth;
let forHeight;
let forDirection;
let forX;
let forY;



const widthElement = document.getElementById('widthNumber');

widthElement.addEventListener('change', () => {
    forWidth = parseInt(widthElement.value);
})



const heightElement = document.getElementById('heightNumber');

heightElement.addEventListener('change', () => {
    forHeight = parseInt(heightElement.value);
})


const directionElement = document.getElementById('cardinal-points');

directionElement.addEventListener("change", () => {
    forDirection = directionElement.value;
})


/* Get x and y values, transform in integer */
const xElement = document.getElementById('forX');

xElement.addEventListener('change', () => {
    forX = parseInt(xElement.value);
})


const yElement = document.getElementById('forY');

yElement.addEventListener('change', () => {
    forY = parseInt(yElement.value);
})


/* Push instructions in array function */
const forInstructions = [];

const classInstructions = document.querySelectorAll('button.instructions');

classInstructions.forEach((button) => {
    button.addEventListener('click', function(){
        forInstructions.push(this.value);
        const instructionsChoice = document.querySelector('#instructions-choice');
        instructionsChoice.innerHTML = forInstructions.join(' - ');
    })
})

/* Delete last array element function */
const btnSuppr = document.getElementById("btn-Suppr");
btnSuppr.addEventListener('click', () => {
    forInstructions.pop();
    const instructionsChoice = document.querySelector('#instructions-choice');
    instructionsChoice.innerHTML = forInstructions.join(' - ');
})


/* Hoover mooving function */
const execute = (width, height, x, y, direction, instructions) => {

    for (let i = 0; i < forInstructions.length; i++) {

        switch(instructions[i]) {
            // Check instructions and change directions
            case 'D':
                if (direction === north.mainDirection) {
                    direction = north.rightDirection;
                }
                else if (direction === east.mainDirection) {
                    direction = east.rightDirection;
                }
                else if (direction === south.mainDirection) {
                    direction = south.rightDirection;
                }
                else if (direction === west.mainDirection) {
                    direction = west.rightDirection;
                }
            break;
            
            case 'G':
                if (direction === north.mainDirection) {
                    direction = north.leftDirection;
                }
                else if (direction === west.mainDirection) {
                    direction = west.leftDirection;
                }
                else if (direction === south.mainDirection) {
                    direction = south.leftDirection;
                }
                else if (direction === east.mainDirection) {
                    direction = east.leftDirection;
                }
            break;
            
            case 'A':
            // if instruction = A, according to direction, move forward or backward x and y.
                    if (direction === east.mainDirection) {
                    
                        if (x + 1 <= width) {
                            x = x + 1;
                        }
                    
                     }
                 
                     else if (direction === south.mainDirection) {
                    
                        if (y - 1 > 0) {
                            y = y - 1;
                        }
                     }
                 
                     else if (direction === west.mainDirection) {
                    
                        if (x - 1 > 0) {
                            x = x - 1;
                        }

                     }
                 
                     else if (direction === north.mainDirection) {
                    
                        if (y + 1 <= height) {
                            y = y + 1;
                        }
                     }
                 
            break;
                 
            default:
                alert("Cette commande n'existe pas.")            
        
        }
    }

    /* Select and show final elements */
    const finalX = document.querySelector('#final-x');
    const finalY = document.querySelector('#final-y');
    const finalDirection = document.querySelector('#final-direction');

    finalX.innerHTML = x;
    finalY.innerHTML = y;
    finalDirection.innerHTML = direction;

// End of execute function
}


/* Mooving function */
const buttonExecute = document.querySelector('#execute');

buttonExecute.addEventListener('click', () => {
    
    execute(forWidth, forHeight, forX, forY, forDirection, forInstructions);
})