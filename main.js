function setup() {
        window.location = 'index.html';
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function newGame() {
        window.location = 'new.html';
}
function joinGame() {
        window.location = 'join.html';
}
function masterActive() {
        window.location = 'master.html';
}
function playerActive() {
        window.location = 'player.html';
}
function hide() {
        window.location = 'code.html';
}
function showCode() {
        codeVar1 = Math.floor(Math.random() * (+9 - +0)) + +0;
        codeVar2 = Math.floor(Math.random() * (+9 - +0)) + +0;
        codeVar3 = Math.floor(Math.random() * (+9 - +0)) + +0;
        codeVar4 = Math.floor(Math.random() * (+9 - +0)) + +0;
        codeVar5 = Math.floor(Math.random() * (+9 - +0)) + +0;
        codeVar6 = Math.floor(Math.random() * (+9 - +0)) + +0;
        document.getElementById("code").innerHTML = (codeVar1 + "" + codeVar2 + "" + codeVar3 + "" + codeVar4 + "" + codeVar5 + "" + codeVar6);
        document.getElementById("begin").scrollIntoView();
}
function begin() {
        window.location = 'play.html';

}