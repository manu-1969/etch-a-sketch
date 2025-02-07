
const grid_x_y = 16;

const container = document.querySelector('.container');

createGrid(grid_x_y);

function createGrid(grid_x_y) {
    for( let i = 0; i < grid_x_y; i++ ) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for( let j = 0; j < grid_x_y; j++ ) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })

            row.appendChild(gridBox)
        };

        container.appendChild(row);

    }
};

