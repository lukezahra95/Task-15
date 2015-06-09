var bricksound:AudioClip;
var wallsound:AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col:Collision)
{
	if (col.gameObject.tag == "special")
	{	
		audio.PlayOneShot(bricksound,0.5);
		
		Destroy(col.gameObject);
		
		if (gamecontroller.score >= 0)
		{
			gamecontroller.score = gamecontroller.score+50;
		}
	}
	else if (col.gameObject.tag == "normal")
	{
		audio.PlayOneShot(bricksound,0.5);
	
		Destroy(col.gameObject);
		
		if (gamecontroller.score >= 0)
		{
			gamecontroller.score = gamecontroller.score+10;
		}
	}
	
	if (col.gameObject.tag == "wall")
	{
		audio.PlayOneShot(wallsound,0.5);
	}
	
	Destroy(this.gameObject);
	
}