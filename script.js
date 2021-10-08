let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[1]);
        lightColor(elementColor.Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botes clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}

//funcao para click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para gamer over
let gameOver = () => {
    alert(`Pontuaçao: ${score}!\nVocê perdeu o o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    checkOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao genesis! Iniciando novo jogo')
    score = 0;

    nextLevel();
}

//eventos de clicks para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => (2);
blue.onclick = () => (3);


//inicio do jogo
playGame();