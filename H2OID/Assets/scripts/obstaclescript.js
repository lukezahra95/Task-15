var obstacleSound:AudioClip;

function Start () {

}

function Update () {
}

function OnCollisionEnter(col:Collision)
{
  if (col.gameObject.tag == "ball")
	{
		audio.PlayOneShot(obstacleSound,0.5);
	}
}
