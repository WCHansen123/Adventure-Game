var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var gamecontainer = document.getElementById('game-container');
var gamebuttons = document.getElementById("game-buttons");
var title = document.getElementById('title');
var descrip = document.getElementById('description');

var inventoryItem = document.getElementById('inventoryItem');
var inventory = false;

//Inventory Function.
function item() {
  inventory = true;
  document.getElementById('inventoryItem').style.display = 'none';
  button2.style.display = 'block';
  button1.style.display = 'none';
}

function setLevel(LevelTitle, description, button1Text, button2Text, button3Text) {
  title.innerHTML=LevelTitle;
  descrip.innerHTML=description;
  button1.innerHTML=button1Text;
  button2.innerHTML=button2Text;
  button3.innerHTML=button3Text;
}

//Start Game, Minecraft Menu.
function startGame() {
  setLevel('Minecraft SinglePlayer', 'Press On SinglePlayer To Start The Game', '', '', '');
  inventoryItem.style.visibility = 'hidden';
  button3.classList.remove('button3extra');
  button1.style.visibility = 'hidden';
  button2.style.visibility = 'hidden';
  button3.onclick = LevelOne;
  gamecontainer.classList.add('BackGroundImage');
  gamecontainer.style.backgroundImage = "url('img/mainscreenMC.png')";
} startGame();

//Spawned in. Start Of The Minecraft Game.
function LevelOne() {
  setLevel('Minecraft Click And Place!', 'Your Objective Is To Find Diamond And Be Abled To Gather It', 'Go Left', 'Go Right');
  inventoryItem.style.visibility = 'hidden';
  button1.style.visibility = 'visible';
  button2.style.visibility = 'visible';
  button1.onclick = LevelTwoLeft;
  button2.onclick = LevelTwoRight;
  button3.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/level1.png')";
}

//First All The Levels For The Left Side.
function LevelTwoLeft() {
  setLevel('Wooden Sword', 'Pick Up The Wooden Sword', 'Return', 'Pick Up', '');
  button2.onclick = LevelThreeLeft;
  button1.onclick = LevelOne;
  gamecontainer.style.backgroundImage = "url('img/woodensword1.png')";
}

function LevelThreeLeft() {
  setLevel('Wooden Sword', 'Good Job You Got A Wooden Sword!', '', 'Continue', '');
  button2.onclick = LevelFourLeft;
  button1.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/woodensword2.png')";
}

function LevelFourLeft() {
  setLevel('Cave Entrance', 'You Found A Cave! Go Inside The Cave Or Return. Note When You Return You Lose Your Sword', 'Go Inside The Cave', 'Go Inside The Cave');
  gamecontainer.style.backgroundImage = "url('img/Level2.png')";
  button1.style.visibility = 'visible';
  button1.onclick = LevelSixLeft;
  button2.style.display = 'none';
  button2.onclick = LevelFiveLeft;

  inventoryItem.classList.add('item_one');
  inventoryItem.src = "img/diamondchestplate2.png";
  inventoryItem.style.display = 'block';
  inventoryItem.style.visibility = 'visible';
  inventoryItem.onclick = item;

}

function LevelFiveLeft() {
  setLevel('Ooof','That Is A Creeper, SH*T!');
  button1.style.visibility = 'hidden';
  button2.style.visibility = 'hidden';
  button3.style.visibility = 'hidden';
  inventoryItem.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/creeper1.png')";

  setTimeout(function(){ LevelFiveLeftAlive(); }, 3000);
  console.log('FiveOne');
}

function LevelFiveLeftAlive() {
  setLevel('You Lived!', 'Congratulations You Survived The Creeper Explosion', '', 'Continue', '');
  button2.style.visibility = 'visible';
  button2.onclick = LevelSevenLeft;
  button1.style.visibility = 'hidden';
  button3.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/creeper3Alive.png')";
  console.log('FiveTwo');
}

function LevelSixLeft() {
  setLevel('Ooof','That Is A Creeper F**K!');
  button1.style.visibility = 'hidden';
  button2.style.visibility = 'hidden';
  button3.style.visibility = 'hidden';
  inventoryItem.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/creeper4.png')";

  setTimeout(function(){ LevelSixLeftDied(); }, 3000);
}

function LevelSixLeftDied() {
  setLevel('You Died!', 'You Have Not Survived The Explosion', '', '', 'Restart');
  button3.onclick = startGame;
  button1.style.visibility = 'hidden';
  button2.style.visibility = 'hidden';
  gamecontainer.style.backgroundImage = "url('img/creeper2Died.png')";
  console.log('SixTwo');

}

function LevelSevenLeft() {
  setLevel('Chest', 'The Creeper Explosion Uncovered A Chest, And You Found A Iron Pickaxe', '', 'Continue', '');
  button2.onclick = LevelEightLeft;
  gamecontainer.style.backgroundImage = "url('img/creeper3Alive.png')";
}

function LevelEightLeft() {
  setLevel('You Won Already!', 'You Found Diamonds Really Fast Already, Congratulations !', '', '', '');
  gamecontainer.style.backgroundImage = "url('img/won.png')";
  button2.style.visibility = 'hidden';
}

/// all levels to the right

function LevelTwoRight() {
  setLevel('Quest To Diamonds', 'Get Wood (Click On The Wooden Log)', '', '', '');
  var buttonextra = document.createElement('button');
  gamebuttons.appendChild(buttonextra);
  buttonextra.id ='buttonextra';
  button1.style.display = 'none';
  button2.style.display = 'none';
  button3.style.display = 'none';
  buttonextra.onclick = LevelThreeRight;
  gamecontainer.style.backgroundImage = "url('img/ChoppingWood1.png')";
} //LevelTwoRight()

function LevelThreeRight() {
  setLevel('Quest To Diamonds', 'Get Wood (Click On The Wooden Log)', '', '', '');
  buttonextra.onclick = LevelFourRight;
  gamecontainer.style.backgroundImage = "url('img/ChoppingWood2.png')";
}

function LevelFourRight() {
  setLevel('Quest To Diamonds', 'Get Wood (Click On The Wooden Log)', '', '', '');
  buttonextra.onclick = LevelFiveRight;
  gamecontainer.style.backgroundImage = "url('img/ChoppingWood3.png')";
}

function LevelFiveRight() {
  setLevel('Workbench', 'Make A Crafting Table', '', '', '');
  buttonextra.style.display = 'none';
  var buttonextratwo = document.createElement('button');
  gamebuttons.appendChild(buttonextratwo);
  buttonextratwo.id ='buttonextratwo';
  buttonextratwo.onclick = LevelSixRight;
  gamecontainer.style.backgroundImage = "url('img/CraftingTable.png')";
}

function LevelSixRight() {
  setLevel('Workbench', 'You Made A Workbench, Now Place It', '', '', '');
  buttonextratwo.style.display = 'none';
  buttonextra.style.display = 'block';
  buttonextra.onclick = LevelSevenRight;
  gamecontainer.style.backgroundImage = "url('img/CraftingTablePlace.png')";
}

function LevelSevenRight() {
  setLevel('Workbench', 'You Placed The Workbench, Now You Can Craft A Pickaxe', '', 'Craft', '');
  buttonextra.style.display = 'none';
  button2.style.display = 'block';
  button2.onclick = LevelEightRight;
  gamecontainer.style.backgroundImage = "url('img/CraftingTablePlaced.png')";
}

function LevelEightRight() {
  setLevel('Craft', 'Craft A Wooden Pickaxe', '', '', '');
  button2.style.display = 'none';
  var buttonextrathree = document.createElement('button');
  gamebuttons.appendChild(buttonextrathree);
  buttonextrathree.id ='buttonextrathree';
  buttonextrathree.onclick = LevelNineRight;
  gamecontainer.style.backgroundImage = "url('img/woodenpickaxe.png')";
}

function LevelNineRight() {
  setLevel('Mine', 'You Have Made A Wooden Pickaxe, Now You Can Get Stone', '', '', '');
  buttonextrathree.style.display = 'none';
  buttonextra.style.display = 'block';
  buttonextra.onclick = LevelTenRight;
  gamecontainer.style.backgroundImage = "url('img/MineStone1.png')";
}

function LevelTenRight() {
  setLevel('Mine', 'Get More Stone', '', '', '');
  buttonextra.onclick = LevelElevenRight;
  gamecontainer.style.backgroundImage = "url('img/MineStone2.png')";
}

function LevelElevenRight() {
  setLevel('Mine', 'Get More Stone', '', '', '');
  buttonextra.onclick = LevelTwelveRight;
  gamecontainer.style.backgroundImage = "url('img/MineStone3.png')";
}

function LevelTwelveRight() {
  setLevel('Mined', 'You Have Enough Stone To Make A Stone Pickaxe', '', 'Go To Workbench', '');
  buttonextra.style.display = 'none';
  button2.style.display = 'block';
  button2.onclick = LevelThirteenRight;
  gamecontainer.style.backgroundImage = "url('img/MineStone4.png')";
}

function LevelThirteenRight() {
  setLevel('Craft', 'Click On The Stone Pickaxe To Craft', '', 'Continue Mining', '');
  button2.style.display = 'none';
  buttonextrathree.style.display = 'block';
  buttonextrathree.onclick = LevelFourteenRight;
  gamecontainer.style.backgroundImage = "url('img/StonePickaxe.png')";
}

function LevelFourteenRight() {
  setLevel('Mine', 'Mine The Iron', '', '', '');
  buttonextrathree.style.display = 'none';
  buttonextra.style.display = 'block';
  buttonextra.onclick = LevelFifteenRight;
  gamecontainer.style.backgroundImage = "url('img/MineIron1.png')";
}

function LevelFifteenRight() {
  setLevel('Mine', 'Mine More Iron, But Look Out For Traps', '', '', '');
  buttonextra.onclick = LevelSixteenRight;
  gamecontainer.style.backgroundImage = "url('img/MineIron2.png')";

  var Ai = Math.random();

  if (Ai < 0.5) {
      Ai = buttonextra.onclick = LevelSixteenRight;
  } else {
      Ai = buttonextra.onclick = LevelSixteenDeadRight;
  }
}

function LevelSixteenRight() {
  setLevel('Mine', 'Mine More Iron', '', '', '');
  buttonextra.onclick = LevelSeventeenRight;
  gamecontainer.style.backgroundImage = "url('img/MineIron3.png')";
}

function LevelSeventeenRight() {
  setLevel('Mined', 'You Mined 3 Iron, That Is Enough For A Iron Pickaxe', '', 'Workbench', '');
  buttonextra.style.display = 'none';
  button2.style.display = 'block';
  button2.onclick = LevelEighteenRight;
  gamecontainer.style.backgroundImage = "url('img/MineIron4.png')";
}

function LevelEighteenRight() {
  setLevel('Craft', 'Click On The Furnace To Craft', '', '', '');
  button2.style.display = 'none';
  buttonextrathree.style.display = 'block';
  buttonextrathree.onclick = LevelNineteenRight;
  gamecontainer.style.backgroundImage = "url('img/Furnace.png')";
}

function LevelNineteenRight() {
  setLevel('Place', 'Click On The Ground Place The Furnace', '', '', '');
  buttonextrathree.style.display = 'none';
  buttonextra.style.display = 'block';
  buttonextra.onclick = LevelTwentyRight;
  gamecontainer.style.backgroundImage = "url('img/FurnacePlace.png')";
}

function LevelTwentyRight() {
  setLevel('Placed', 'You Placed The Furnace', '', 'Melt Iron', '');
  buttonextra.style.display = 'none';
  button2.style.display = 'block';
  button2.onclick = LevelTwentyoneRight;
  gamecontainer.style.backgroundImage = "url('img/FurnacePlaced.png')";
}

function LevelTwentyoneRight() {
  setLevel('Melt', 'Put In The Iron To Melt It', '', '', '');
  button2.style.display = 'none';
  var buttonextrafour = document.createElement('button');
  gamebuttons.appendChild(buttonextrafour);
  buttonextrafour.id ='buttonextrafour';
  buttonextrafour.onclick = LevelTwentytwoRight;
  gamecontainer.style.backgroundImage = "url('img/IronMelting1.png')";
}

function LevelTwentytwoRight() {
  setLevel('Molten', 'You Have Molten All The Iron', '', '', '');
  var buttonextrafive = document.createElement('button');
  gamebuttons.appendChild(buttonextrafive);
  buttonextrafive.id ='buttonextrafive';
  buttonextrafour.style.display = 'none';
  buttonextrafive.onclick = LevelTwentythreeRight;
  gamecontainer.style.backgroundImage = "url('img/IronMolten.png')";
}

function LevelTwentythreeRight() {
  setLevel('Craft', 'Click On The Iron Pickaxe To Craft It', '', '', '');
  buttonextrafive.style.display = 'none';
  buttonextrathree.style.display = 'block';
  buttonextrathree.onclick = LevelTwentyfourRight;
  gamecontainer.style.backgroundImage = "url('img/IronPickaxe.png')";
}

function LevelTwentyfourRight() {
  setLevel('Congratulations', 'Now You Can Mine Diamonds, That Means The Game Is Over! Thank You For Playing', '', '', '');
  buttonextrathree.style.display = 'none';
  gamecontainer.style.backgroundImage = "url('img/won.png')";
}

function LevelSixteenDeadRight() {
  setLevel('You Lost!', 'You Fell In A Trap And Died, Refresh The Page To Try Again', '', '', '');
  gamecontainer.style.backgroundImage = "url('img/YouLost.png')";
}

// LevelTwoRight()
// LevelThreeRight();
// LevelFiveRight()
// LevelTwentyoneRight()