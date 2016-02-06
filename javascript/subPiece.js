// récupération du contexte graphique
var canvas = document.getElementById("essai2");
var gfx    = canvas.getContext("2d");

var chessSymbols = new Image();
chessSymbols.src = 'chess.png';
chessSymbols.onload = function() {
     console.info("Chess symbols loaded !");
gfx.fillStyle = "white";
gfx.fillRect(0, 0, canvas.width, canvas.height);
    gfx.drawImage(chessSymbols, 0, 0, chessSymbols.width, chessSymbols.height);
gfx.drawImage(chessSymbols,  0, 0, 75, 75, canvas.width/2, 75, 75, 75);
};
undefined;
