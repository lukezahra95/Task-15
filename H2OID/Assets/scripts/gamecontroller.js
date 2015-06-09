static var score:int = 0;
static var lives:int = 3;
var style:GUISkin;

function Start () {
}

function Update () {
}

function OnGUI()
{
	GUI.skin = style;
	
	GUI.Label (Rect(400,8,100,30),"Score: "+ score);
	GUI.Label (Rect(400,35,100,30),"Lives: "+ lives);
}
