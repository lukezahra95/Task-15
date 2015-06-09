var style:GUISkin;

function Start () {
}

function Update () {
}

function OnGUI()
{
	GUI.skin = style;

	GUI.Label (Rect(15,8,100,30),"Score: "+ gamecontroller.score);
	GUI.Label (Rect(15,35,100,30),"Lives: "+ gamecontroller.lives);
}