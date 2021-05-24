/* Get width, height and direction values */
const widthValue = document.getElementById('width').value;
const forWidth = parseInt(widthValue);

const heightValue = document.getElementById('height').value;
const forHeight = parseInt(heightValue);

const forDirection = document.getElementById('cardinal-points').value;

/* Get x and y values, transform in integer */
const xValue = document.getElementById('forX').value;
const forX = parseInt(xValue);

const yValue = document.getElementById('forY').value;
const forY = parseInt(yValue);


/* Push instructions in array function */
const forInstructions = [];


const btnG = document.getElementById("btn-G");

btnG.addEventListener('click', () => {
    forInstructions.push(btnG.value);
    const instructionsChoice = document.querySelector('#instructions-choice');
    instructionsChoice.innerHTML = forInstructions.join(' - ');
})


const btnD = document.getElementById("btn-D");

btnD.addEventListener('click', () => {
    forInstructions.push(btnD.value);
    const instructionsChoice = document.querySelector('#instructions-choice');
    instructionsChoice.innerHTML = forInstructions.join(' - ');
})


const btnA = document.getElementById("btn-A");

btnA.addEventListener('click', () => {
    forInstructions.push(btnA.value);
    const instructionsChoice = document.querySelector('#instructions-choice');
    instructionsChoice.innerHTML = forInstructions.join(' - ');
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
                if (direction === "N") {
                    direction = "E";
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
            
            case 'G':
                if (direction === "N") {
                    direction = "W";
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
            
            case 'A':
            // if instruction = A, according to direction, move forward or backward x and y.
                    if (direction === "E") {
                    
                        if (x + 1 < width) {
                            x = x + 1;
                        }
                    
                     }
                 
                     else if (direction === "S") {
                    
                        if (y - 1 > 0) {
                            y = y - 1;
                        }
                     }
                 
                     else if (direction === "W") {
                    
                        if (x - 1 > 0) {
                            x = x - 1;
                        }

                     }
                 
                     else if (direction === "N") {
                    
                        if (y + 1 < height) {
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


/* Reload function */
const reloadBtn = document.querySelector('#reload');

reloadBtn.addEventListener('click', () => {
    window.location.reload();
})