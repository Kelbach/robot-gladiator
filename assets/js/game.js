var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
}

fight();

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
