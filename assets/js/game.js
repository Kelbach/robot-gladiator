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
    while(enemyHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {

        //subtract player attack from enemy health and update enemy health
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemyhealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated.");
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
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }

        //if player skips
        } else if (promptFight === "skip" || promptFight ==="SKIP") {
            //confirm
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            //if true, leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided  to skip this fight.");
                //subtract money
                playerMoney = playerMoney - 2;
            }
            //if false, ask again
            else {
                fight();
            }

        } else {
            window.alert("You need to choose a valid option. Try again.")
        }
    }
}

// fight();

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}