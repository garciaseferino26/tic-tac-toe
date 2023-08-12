// x will always go first, the players decide who x will be each turn
const order = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
const gameboardArr = [['','',''], ['','',''], ['','','']];

// will use these copies to reset the game voard and order at the end of each game
const resetOrder = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
const resetGameboardForm = [['','',''],['','',''], ['','','']];

// create var to hold the .body container
const gridBody = document.querySelector('.body');

// function to get placement (coordinates) of the cell on the board then 
function placementOnBoard(selection) {
    // will hold the two coordinates
    const cellPos = [];
    var xP = Math.floor((selection - 1) / 3);
    var yP = (selection - 1) % 3;
    // x and y to be pushed on the local array here
    cellPos.push(xP);
    cellPos.push(yP);
    return cellPos;
}

// this will pop from global array and place the image related to the letter on the index.html file
function userSelection(symbol) {
    console.log('we entered userselection funct')
    console.log(symbol.children.length)

    // this variable will pop from global array, keeping track of which symbol is next to be placed on board 
    var turn = order.pop();
    console.log(turn, "current turn")
    
    if (symbol.children.length === 0) {
        const img = document.createElement('img');

        if (turn ==='X') {
            img.setAttribute('src', './images/alpha-x.svg');
        }
        if (turn ==='O') {
            img.setAttribute('src', './images/alpha-o.svg');
        }
        symbol.appendChild(img);
        console.log(symbol.children.length)

        return turn;
    } else {
        alert('please make another selection')
        order.push(turn);
        if (turn === 'O') {
            return 'X';
        }else{
            return 'O';
        }
    }
}

function resetAll() {
    const items = document.querySelectorAll('.imgDiv');
    for (const item of items) {
        item.removeChild();
    }
}
var xArray = [];
var oArray = [];
// this function will store the id to a local list within the function and check to see if whats on the board is equal to any of the combinations
function whoWins(userSym, cell_id){
    const toWin = [['1', '2', '3'],['4', '5', '6'],['7', '8', '9'],['1', '4', '7'],['2', '5', '8'],['3', '6', '9'],['1', '5', '9'],['3', '5', '7']]


    if (userSym === 'X') {
        xArray.push(cell_id);
        xArray = xArray.sort()
        console.log(xArray, "this is the x array fedd into the whowins funct")

        if (xArray.length >= 3) {
            console.log('we entered the x list of whowins function due to length of 3')
            for (let i=0; i+3 <= xArray.length; i++) {
                var subArrX = xArray.slice(i,i+3);
                console.log(subArrX, "sub array x min 3")

                for (let j = 0; j < toWin.length; j++) {
                    console.log(toWin.length, j, "length of to win array")

                    var compareToWin = toWin[j];
                    console.log(toWin[j], "and", subArrX)
                    console.log("")
                    if (subArrX.every((val, index) => val === compareToWin[index])){
                        alert('player 1 wins!');
                        resetAll();
                    }
                }
            }
        }
    }
    if (userSym ==='O') {
        oArray.push(cell_id);
        oArray = oArray.sort()
        console.log(oArray, "this is the o array fedd into the whowins funct")

        if (oArray.length >= 3) {
            console.log('we entered the o list of whowins function due to length of 3')
            for (let i=0; i+3 <= oArray.length; i++) {
                var subArrO = oArray.slice(i,i+3);
                for (let j = 0; j < toWin.length; j++) {
                    var compareToWin = toWin[j];
                    if (subArrO.every((val, index) => val === compareToWin[index])) {
                        alert('player 2 wins! yay!!');
                    }
                }
            }
        }
    } 
    if (order.length === 0) {
        alert("Tie Game!");
    }
    console.log(xArray, "x array");
    console.log(oArray, "o array");
}


// create all 9 cells for the 3x3 grid and add to html 
for (let i=0; i<9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', i + 1);

    // will be a div inside cell div to hold image
    const symbol = document.createElement('div');
    symbol.classList.add('imgDiv');

    // make symbol div a child of cell div
    cell.appendChild(symbol);

    // add the cell to the grid body
    gridBody.appendChild(cell);

    // add a function when clicking each cell
    cell.addEventListener('click', function(){

        // grab the number id for each cell
        var cellId = cell.id;
        console.log(cellId, "this is the cell ID");

        // call placementonBoard function
        var coords = placementOnBoard(cellId);
        console.log(coords, "placement on the board coords");

        console.log(coords[0], 'this is the x coord');
        console.log(coords[1], 'this is the y coord');

        // call userSelection function 
        var currTurn = userSelection(symbol);
        
        gameboardArr[coords[0]][coords[1]] = currTurn;
        console.log(gameboardArr, 'placed symbol at these coords');

        whoWins(currTurn, cellId)
    })
}