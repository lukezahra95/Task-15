var gameoversound:AudioClip;

function Start () {
	playSound();
	gamecontroller.lives = 3;
	gamecontroller.score = 0;
}

function playSound() {
	audio.PlayOneShot(gameoversound);
}