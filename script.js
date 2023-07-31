// x will always go first, the players decide who x will be each turn
const order = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
const gameboardArr = [['','',''],['','',''], ['','','']]
// create var to hold the .body container
const gridBody = document.querySelector('.body');

// function to place the cells id on the board with the next symbol
function placeOnBoard(selection) {
    const cellPos = []
    var xP = Math.floor((selection - 1) / 3) ;
    var yP = (selection - 1) % 3;
    cellPos.push(xP);
    cellPos.push(yP)
    return cellPos;
}


// create all 9 cells for the 3x3 grid and add to html 
for (let i=0; i<9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', i + 1)

    const symbol = document.createElement('p');
    cell.appendChild(symbol);
    gridBody.appendChild(cell);

    cell.addEventListener('click', function(){
        var cellId = cell.id
        console.log(cellId)

        var coords = placeOnBoard(cellId)
        console.log(coords)

        console.log(coords[0], 'this is the x coord')
        console.log(coords[1], 'this is the y coord')
        gameboardArr[coords[0]][coords[1]] = order.pop()
        console.log(gameboardArr)
    })
}
