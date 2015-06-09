var skin:GUISkin;

function Start () {
}

function Update () {
}

function OnGUI()
{
	GUI.skin = skin;
	
	GUI.Label(Rect(75,85,900,150),"The game consists in hitting the blocks which in this case are elements from the periodic table. All you have to do is keeping the ball in play. The aim is to get power-ups and to do so, you have to hit 2 consecutive blocks which make a chemical reaction for example Zinc and Iodine.\nTo pause the game you can either press 'ESC' or 'P'. Enjoy the game!");
	GUI.Label(Rect(120,350,100,50),"Green Power-Up");
	GUI.Label(Rect(45,400,250,150),"The green pill gives the paddle the ability to shoot lasers to hit the blocks. The drawback is that when the blocks are hit with the laser, there is no chance for a power-up to drop. To shoot just press RIGHT-CLICK!");
	GUI.Label(Rect(375,350,100,50),"Red Power-Up");
	GUI.Label(Rect(325,415,200,75),"The red pill gives you an extra life which can be to a great advantage during the game.");
	GUI.Label(Rect(625,350,100,50),"Yellow Power-Up");
	GUI.Label(Rect(575,400,200,75),"The yellow pill shrinks the paddle. Better not take it!");
	GUI.Label(Rect(875,350,100,50),"Blue Power-Up");
	GUI.Label(Rect(825,400,200,75),"The blue pill expands the paddle to make it longer.");
}