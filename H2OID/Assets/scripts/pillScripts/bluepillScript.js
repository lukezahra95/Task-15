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
		col.gameObject.transform.localScale = new Vector3(36, 4, 12);
		col.gameObject.transform.localScale += new Vector3(24f, 0, 0);
		greenpillScript.canShoot = false;
	}
}