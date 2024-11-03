const emojis = [
    "🐱",
    "🐱",
    "🦊",
    "🦊",
    "🐟",
    "🐟",
    "🐴",
    "🐴",
    "🐸",
    "🐸",
    "🐌",
    "🐌",
    "🐔",
    "🐔",
    "🐢",
    "🐢"
];
let openCards = [];
let gameStarted = false; // Para verificar se o jogo foi iniciado

function startGame() {
    
    document.querySelector(".game").innerHTML = ""; // Limpa o tabuleiro
    openCards = []; // Reinicia as cartas abertas
    gameStarted = true;

    let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
    
    for (let i = 0; i < emojis.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuffleEmojis[i];
        box.onclick = handleClick;
        document.querySelector(".game").appendChild(box);
    }
    // Altera o botão para "RESET GAME"
    document.querySelector(".reset").innerHTML = "RESET GAME";
}

function handleClick() {
    if (!gameStarted) return; // Não faz nada se o jogo não tiver começado
    if (this.classList.contains("boxOpen") || openCards.length >= 2) return; // Evita múltiplos cliques na mesma carta

    this.classList.add("boxOpen");
    openCards.push(this);

    if (openCards.length === 2 ) {
        setTimeout(checkMatch, 500);
    }
}
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você Venceu!!");
    }
}

// Reiniciar o jogo
function resetGame() {
    if (!gameStarted) {
        startGame();
    } else {
        startGame(); // Reinicia o jogo
    }
}


