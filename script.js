// create var to hold the .body container
const gridBody = document.querySelector('.body');
// create all 9 cells for the 3x3 grid and add to html 
for (let i=0; i<9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('section' + (i + 1));
    cell.classList.add('cell');

    const symbol = document.createElement('p');
    cell.appendChild(symbol);
    gridBody.appendChild(cell);
}


const order = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
gridBody.cell = addEventListener('click', function() {
    console.log('hi');
})