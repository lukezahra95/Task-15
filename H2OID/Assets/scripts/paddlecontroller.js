var yposition: float = 0;
var zposition: float = 0;
var xboundary: float = 0;
var maxboundary: float = 20.0;
var ballPrefab:GameObject;
var attachedBall:GameObject = null;
var ballRigidbody:Rigidbody;
var ballspeed:float = 4250;
var paddlesound:AudioClip;
var laserSound:AudioClip;
var laserRigidbody:Rigidbody;
var materials:Material[];

function Start () {
	spawnBall();
	StartCoroutine("paddleColours");
}

function Update () {
	//with mouse
		transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
		
		if (transform.position.x < -xboundary + maxboundary)
		{
			transform.position = new Vector3(-xboundary + maxboundary, yposition, zposition);
		}
		else if (transform.position.x > xboundary - maxboundary)
		{
			transform.position = new Vector3(xboundary - maxboundary, yposition, zposition);
		}
	
	if(attachedBall) 
	{
			this.gameObject.transform.localScale = new Vector3(36, 4, 12);
			greenpillScript.canShoot = false;
			ballRigidbody = attachedBall.rigidbody;
			ballRigidbody.position = transform.position + new Vector3(0, 5.5, 0);
			
			if(Input.GetMouseButton(0)) 
			{
				ballRigidbody.isKinematic = false;
				ballRigidbody.AddForce(0,ballspeed,0);
				attachedBall = null;
			}
	}
	
	shoot();
}

function spawnBall() {
		// Spawn new ball
		attachedBall = Instantiate(ballPrefab, transform.position + new Vector3(0, 40, 0), Quaternion.identity ) as GameObject;
}

function OnCollisionEnter(col:Collision)
{
		audio.PlayOneShot(paddlesound,0.5);
		
		for (var contact: ContactPoint in col.contacts)
		{
			if( contact.thisCollider == collider )
			{
				// This is the paddle's contact point
				
				var ballangle:float = contact.point.x - transform.position.x;
				
				contact.otherCollider.rigidbody.AddForce(100 * ballangle, 0, 0);
			}
		}
}

function shoot()
{
	if(greenpillScript.canShoot == true)
	{
		if(Input.GetMouseButtonDown(1))
		{
			audio.PlayOneShot(laserSound,0.5);
			var theLaser = Instantiate(laserRigidbody,new Vector3(transform.position.x,transform.position.y+10,transform.position.z-3.9),transform.rotation);
			theLaser.AddRelativeForce(Vector3.up * 4250);
		}
	}
}

function paddleColours()
{
	while(true){
		renderer.sharedMaterial = materials[0];
		yield WaitForSeconds(4);
		renderer.sharedMaterial = materials[1];
		yield WaitForSeconds(4);
		renderer.sharedMaterial = materials[2];
		yield WaitForSeconds(4);
		renderer.sharedMaterial = materials[3];
		yield WaitForSeconds(4);
	}
}