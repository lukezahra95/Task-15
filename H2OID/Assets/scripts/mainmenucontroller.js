var quit=false;
var howtoplay = false;
var back = false;
var intro:AudioClip;

function Start () {
	Time.timeScale = 1;
	renderer.material.color=Color.black;
	playSound();
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
	else if (back == true)
	{
		Application.LoadLevel("menu");
	}
	else
	{
		//load the game
		Application.LoadLevel("level1");
	}
}

function playSound() {
	audio.PlayOneShot(intro);
}