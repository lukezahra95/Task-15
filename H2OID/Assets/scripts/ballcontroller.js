import System.Collections.Generic;

var speed:float = 4250;
var ball:GameObject;
var bricksound:AudioClip;
var wallsound:AudioClip;
var powerUpCounter:int=0;
var powers:GameObject[];
var rand:int;
var powerUpSound:AudioClip;

function Start () {
}

function Update () {
	if(transform.position.y < -100)
	{
		gamecontroller.lives--;
		
		transform.position.y = GameObject.FindGameObjectWithTag("paddle").transform.position.y+5.0;		
		transform.position.x = GameObject.FindGameObjectWithTag("paddle").transform.position.x;
		ball.rigidbody.Sleep();
		var pcontroller:paddlecontroller;
				
		pcontroller = GameObject.FindGameObjectWithTag("paddle").GetComponent(paddlecontroller);
		pcontroller.attachedBall = this.gameObject;		
		
		powerUpCounter = 0;
		if (gamecontroller.lives == 0 )		
			{
				Application.LoadLevel("gameover");
			}
	}
	
	if ((GameObject.FindGameObjectsWithTag("special").Length < 1) && (GameObject.FindGameObjectsWithTag("normal").Length < 1))
	{
		Destroy(this.gameObject);
		Application.LoadLevel("level2");
	}
}

function OnCollisionEnter(col:Collision)
{	
	if(powerUpCounter<0)
	{
		powerUpCounter = 0;
	}
	if (col.gameObject.tag == "special")
	{
		if (powerUpCounter==0 || powerUpCounter==1)
		{
			powerUpCounter = powerUpCounter + 1;
		}
		
		audio.PlayOneShot(bricksound,0.5);
	
		Destroy(col.gameObject);		
		
		if (gamecontroller.score >= 0)
		{
			gamecontroller.score = gamecontroller.score+20;
		}
	}
	else if (col.gameObject.tag == "normal")
	{
		if(powerUpCounter==1)
		{
			powerUpCounter = powerUpCounter - 1;
		}
		
		audio.PlayOneShot(bricksound,0.5);
	
		Destroy(col.gameObject);		
		
		if (gamecontroller.score >= 0)
		{
			gamecontroller.score = gamecontroller.score+20;
		}
	}
	
	if(powerUpCounter == 2)
	{
		generatePower();
		gamecontroller.score = gamecontroller.score+100;
		powerUpCounter = 0;
	}
	
	if (col.gameObject.tag == "wall")
	{
		audio.PlayOneShot(wallsound,0.5);
	}
}

function generatePower()
{
	audio.PlayOneShot(powerUpSound,0.5);
	rand = Random.Range(0,4);
	Instantiate (powers[rand], Vector3(Random.Range(-160.0f, 160.0f), 105, -5), Quaternion.identity);
}
