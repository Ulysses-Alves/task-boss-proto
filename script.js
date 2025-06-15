
const player1xp = document.getElementById("player-1-xp");
const player1health = document.getElementById("player-1-health");
const player1atk = document.getElementById("player-1-atk");
const player1def = document.getElementById("player-1-def");

const player2xp = document.getElementById("player-2-xp");
const player2health = document.getElementById("player-2-health");
const player2atk = document.getElementById("player-2-atk");
const player2def = document.getElementById("player-2-def");

const bossHealth = document.getElementById("boss-health");

const box = document.getElementById("textbox");

let useXpPressed = false;


function useXp1(){
    useXpPressed = true;
    player1xp.innerHTML = "current xp: 0 ↓ / 20 ";
    player1health.innerHTML = "health : 103 ↑";

    box.innerHTML = "Player 1 uso 3 XP para ganhar 3 HEALTH";

}

function getXp1(){

    player1xp.innerHTML = "current xp: 2 ↑ / 20";
    player1health.innerHTML = "health : 103";

    box.innerHTML = "Player 1 completa tarefa de valor 2, ganhando 2 XP";

}

function addTask1(){
    player1xp.innerHTML = "current xp: 2 / 25 ↑";

    box.innerHTML = "Player 1 cria uma nova tarefa de valor 5 para hoje, causando aumento do total de XP disponivel para ganhar.";
}

function endTurn(){
    player1health.innerHTML = "health : 85";
    player2health.innerHTML = "health : 80";

    bossHealth.innerHTML = "healt : 120"

    box.innerHTML = "Turnos terminam todo dia a meia noite. Quando um turno termina, acontece uma troca de dano entre players e o boss, levendo em consideração outros stats na hora de aplicar.";
}