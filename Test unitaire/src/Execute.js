const forWidth = 10;
const forHeight = 10;
const forDirection = 'N';
const forX = 5;
const forY = 5;
const forInstructions = ['D', 'A', 'D', 'A', 'D', 'A', 'D', 'A', 'A'];

let finalX;
let finalY;
let finalDirection;


const execute = (width, height, x, y, direction, instructions) => {

    for (let i = 0; i < forInstructions.length; i++) { // On parcourt le tableau d'instructions

        switch(instructions[i]) { // On vérifie les instructions
            case 'D': // si l'instruction est D
                if (direction === "N") { // On vérifier la direction
                    direction = "E"; // On change la direction
                }
                else if (direction === "E") {
                    direction = "S";
                }
                else if (direction === "S") {
                    direction = "W";
                }
                else if (direction === "W") {
                    direction = "N";
                }
            break;
            
            case 'G': // si l'instruction est G
                if (direction === "N") { // On vérifier la direction
                    direction = "W"; // On change la direction
                }
                else if (direction === "W") {
                    direction = "S";
                }
                else if (direction === "S") {
                    direction = "E";
                }
                else if (direction === "E") {
                    direction = "N";
                }
            break;
            
            case 'A': // si l'instruction est A
                    if (direction === "E") { // On vérifie la direction : selon l'orientation...
                    
                        if (x + 1 < width) { // ... et que, si on avance, on n'atteint pas la longueur maximum de la pièce,
                            x = x + 1; // alors on avance d'une case dans la bonne direction
                        }
                    
                     }
                 
                     else if (direction === "S") {
                    
                        if (y - 1 > 0) { // ... et que, si on avance, on n'atteint pas la largeur minimum de la pièce,
                            y = y - 1; // alors on recule d'une case dans la bonne direction
                        }
                     }
                 
                     else if (direction === "W") {
                    
                        if (x - 1 > 0) { // ... et que, si on avance, on n'atteint pas la longueur minimum de la pièce,
                            x = x - 1; // alors on recule d'une case dans la bonne direction
                        }

                     }
                 
                     else if (direction === "N") {
                    
                        if (y + 1 < height) { // ... et que, si on avance, on n'atteint pas la largeur maximum de la pièce,
                            y = y + 1; // alors on avance d'une case dans la bonne direction
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