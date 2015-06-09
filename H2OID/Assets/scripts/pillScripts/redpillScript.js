function Start () {

}

function Update () {
if(transform.position.y < -120)
	{
		Destroy(this.gameObject);
	}
}

function OnCollisionEnter(col:Collision)
{
	if ((col.gameObject.tag == "paddle"))
	{
		Destroy(this.gameObject);
		gamecontroller.lives++;
	}
}