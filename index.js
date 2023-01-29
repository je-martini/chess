const canvas = document.getElementById('canvas');
const board = canvas.getContext('2d');

let board_sizes; 

window.addEventListener('load', set_board_sizes);


function set_board_sizes(){

    if (window.innerHeight > window.innerWidth){
        board_sizes = window.innerWidth * 0.8
    } else {
        board_sizes = window.innerHeight * 0.8
    }
    board_sizes = Number(board_sizes.toFixed())
    console.log(board_sizes)
    canvas.setAttribute('width', board_sizes);
    canvas.setAttribute('height', board_sizes);

    let square = board_sizes / 8
    console.log(square)
    

    for(index = 0; index <= 7; index ++ ) {
                
        if(board.fillStyle == '#0000ff'){
            board.fillStyle = '#000000';
        } else if(board.fillStyle == '#000000'){
            board.fillStyle = '#0000ff'
        }

        board.fillRect(square * index, 0, square, square)

        for(index1 = 1; index1 <= 8; index1 ++ ) {

            if(board.fillStyle == '#0000ff'){
                board.fillStyle = '#000000';
            } else if(board.fillStyle == '#000000'){
                board.fillStyle = '#0000ff'
            }

            board.fillRect(square * index, square * index1, square, square)

            if( index1 == 2 ){ 
            let previous_color = board.fillStyle
            board.fillStyle = 'white';
            board.font = `15px Verdana`;
            board.textBaseline = 'bottom'
            board.fillText('PW', (square * index) + (square / 3), (square * index1) - (square / 3))
            board.fillStyle = previous_color
            }

            if( index1 == 7 ){ 
                let previous_color = board.fillStyle
                board.fillStyle = 'white';
                board.font = `15px Verdana`;
                board.textAling= "end"
                board.textBaseline = 'bottom'
                board.fillText('PB', (square * index) + (square / 3), (square * index1) - (square / 3))
                board.fillStyle = previous_color
                }
            
        }
    }

}
