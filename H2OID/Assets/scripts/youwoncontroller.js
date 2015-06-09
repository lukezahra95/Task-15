var quit=false;

function Start () {
	renderer.material.color=Color.black;
}

function OnMouseEnter(){
	renderer.material.color=Color.blue;
}

function OnMouseExit(){
	renderer.material.color=Color.black;
}

function OnMouseUp(){
	if (quit==true)
	{
		//quit the game
		Application.Quit();
	}
	else
	{
		//load the game
		Application.LoadLevel("level1");
	}
}