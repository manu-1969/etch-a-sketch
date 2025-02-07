
const grid_x_y = 16;

const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

createGrid(grid_x_y);

function createGrid(grid_x_y) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
    for( let i = 0; i < grid_x_y; i++ ) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for( let j = 0; j < grid_x_y; j++ ) {
            const widthAndHeight = 960 / grid_x_y;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox);
        };
       wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
};

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('what size should the new grid have?'));

    while (userSize > 100) {
        userSize = Number(prompt('what size should the new grid have?'));
    };
    const wrapper = document.querySelector('.wrapper');
    if(!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove();
        createGrid(userSize);
    }
    
})
