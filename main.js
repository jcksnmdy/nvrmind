page = 0
function setup() {
        page = 0
        window.location = 'index.html';
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function newGame() {
        page = 1
        window.location = 'new.html';
}
function joinGame() {
        page = 2
        window.location = 'join.html';
}
function masterActive() {
        page = 3
        window.location = 'master.html';
}
function playerActive() {
        page = 4
        window.location = 'player.html';
}