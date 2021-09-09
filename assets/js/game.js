var randomNumber = function(min , max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
};

var getPlayerName = function() {
    var name = '';

    while (name === '' || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    //var playerInfo.attack = 10;
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money.");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money.");
        }
    }
};

console.log(playerInfo.name, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
     },
    { 
        name: "Amy Android",
        attack: randomNumber(10,14)
    }, 
    {
        name: "RoboTrumble",
        attack: randomNumber(10,14)
    }
];
//var enemy.health = 50;
//var enemy.attack = 12;

var fight = function(enemy) {
    
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    var fightOrSkip = function() {
        // ask player if they'd like to fight or skip using fightOrSkip function
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
        // Conditional Recursive Function Call
        if (promptFight === "" || promptFight === null) {
            window.alert("You must type FIGHT or SKIP.");
            return fightOrSkip();
        }
      
        promptFight = promptFight.toLowerCase();

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");
      
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight.");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            return true;
          }
        }
    }
    
    console.log(enemy);
    while(playerInfo.health > 0 && enemy.health > 0) {
        
        if (isPlayerTurn) {
            if (fightOrSkip()) {
            break;
            }
        

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            //subtract player attack from enemy health and update enemy health
            //enemy.health = enemy.health - playerInfo.attack;
            enemy.health = Math.max( 0 , enemy.health - damage );

            //log a resulting message to the console
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        

            //check enemyhealth
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has been defeated.");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert(enemy.name + " has " + enemy.health + " health remaining.");
            }

        } else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            //subtract enemy attack from player health and update player health
            //playerInfo.health = playerInfo.health- enemy.attack;
            playerInfo.health = Math.max( 0 , playerInfo.health - enemy.attack );

            //log a resulting message to the console
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has "+ playerInfo.health + " health remaining."
            );

            //check playerInfo.health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has been defeated.");
                break;
            }
            else {
                window.alert(playerInfo.name + " has " + playerInfo.health + " health remaining.");
            }

            //switches turns
            isPlayerTurn = !isPlayerTurn;
        }
    }
}

// fight();
var startGame = function() {
    //reset health
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40 , 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("Shop?");
                if (storeConfirm) {
                    shop();
                }
            }
            else {
                window.alert("You have failed. GAME OVER.");
                break;
            }
        }
    }
    //play again?
    endGame();
};

var endGame = function() {
    if (playerInfo.health > 0 ) {
    window.alert("You have survived and earned yourself " + playerInfo.money + " money cash dollars.");
    }
    else {
        window.alert("You've lost your robot in battle. You made out " + playerInfo.money + " cash money dollars.");
    }
    
    var playAgainConfirm = window.confirm("Try Again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiator! I hope to see you in the ring again soon.")
        }
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "You can replenish your Health by typing '1', upgrade your Attack by typing '2', or leave the store by typing '3'. What'll it be? Enter: '1', '2', or '3'."
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
            //shop();
        case 2:
            playerInfo.upgradeAttack();
            break;
            //shop();
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}

startGame();