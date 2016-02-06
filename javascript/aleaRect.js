// r�cup�ration de l'�l�ment canvas sur lequel faire les dessins
var canvas = document.getElementById("essai1");
// r�cup�ration du contexte graphique
var gfx = canvas.getContext("2d");
// changement de la couleur utilis� pour les dessins de figures pleines

// affichage d'un rectangle plein sur l'ensemble du canvas
gfx.fillStyle = "rgb(0,0,0)";
gfx.fillRect(0, 0, canvas.width, canvas.height);

for (var i=0; i<150; i++) {
    // tirage al�atoire de la couleur
var r = parseInt(Math.random()*256);
var g = parseInt(Math.random()*256);
var b = parseInt(Math.random()*256);
    // dessin d'un rectable plac� al�atoirement sur le canvas
var x = Math.random()*canvas.width;
var y = Math.random()*canvas.height;
gfx.fillStyle = "rgb("+r+","+g+","+ b+")";
gfx.fillRect(x, y, 10, 10);
}

undefined;
