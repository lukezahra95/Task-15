var isPause = false;
var MainMenu : Rect;
 
function Start () {
}
 
function Update () {
 if(Input.GetKeyDown(KeyCode.Escape) || Input.GetKeyDown(KeyCode.P))
 {
  isPause = !isPause;
  if (isPause)
  {
   Time.timeScale = 0;
  }
  else
  {
   Time.timeScale = 1;
  }
 }
}

 function OnGUI()
 {
 	MainMenu = Rect(Screen.width/2-100, Screen.height/2 -50, 200, 125);
 	if (isPause)
 	{
 		GUI.Window(0,MainMenu,theMainMenu, "Pause Menu");
 	}
 }
 
 function theMainMenu()
 {
 	if (GUILayout.Button("Main Menu"))
 	{
 		Application.LoadLevel("menu");
 	}
 	if(GUILayout.Button("Quit"))
 	{
 		Application.Quit();
 	}
 }
