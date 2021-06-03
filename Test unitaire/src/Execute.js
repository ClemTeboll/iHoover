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


// Variables
const forWidth = 10;
const forHeight = 10;
const forDirection = 'N';
const forX = 5;
const forY = 5;
const forInstructions = ['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A'];

let finalX;
let finalY;
let finalDirection;

// Function
const execute = (width, height, x, y, direction, instructions) => {

    for (let i = 0; i < forInstructions.length; i++) { // On parcourt le tableau d'instructions

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

    finalX = x;
    finalY = y;
    finalDirection = direction;

}

execute(forWidth, forHeight, forX, forY, forDirection, forInstructions);