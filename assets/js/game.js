var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "RoboTrumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//game states
//"WIN" - player defeats all robits
// *fight all enemy robots

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

         //if player skips
        if (promptFight === "skip" || promptFight ==="SKIP") {
            //confirm
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            //if true, leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight.");
                //subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }

        }

        //subtract player attack from enemy health and update enemy health
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemyhealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated.");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " has " + enemyHealth + " health remaining.");
        }

        //subtract enemy attack from player health and update player health
        playerHealth = playerHealth- enemyAttack;

        //log a resulting message to the console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining."
        );

        //check playerHealth
        if (playerHealth <= 0) {
            window.alert(playerName + " has been defeated.");
            break;
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }
    }
}

// fight();
var startGame = function() {
    //reset health
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0 ) {
    window.alert("You have survived and earned yourself " + playerMoney + " money cash dollars.");
    }
    else {
        window.alert("You've lost your robot in battle. You made out " + playerMoney + " cash money dollars.");
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
        "You can REFILL your Health, UPGRADE your attack, or LEAVE the store. What'll it be? Enter text: 'REFILL', 'UPGRADE', or 'LEAVE'"
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.")
            }
          break;

        case "LEAVE":
        case "leave":
          window.alert("Leaving the store.");
      
          // do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
      
          // call shop() again to force player to pick a valid option
          shop();
          break;
    }
}
startGame();