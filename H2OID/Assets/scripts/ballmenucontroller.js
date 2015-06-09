var ball:GameObject;

function Start () {
	rigidbody.AddForce(0,2500,0);
}

function Update () {
	if (mainmenucontroller.ballonscreen == false)
	{
		Destroy(ball);
	}
}