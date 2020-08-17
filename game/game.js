let emptiness = 0; // this is how much empty you got
let deleteCount = 1; // this is how much empty gets added when you click the delete button
let deleteUpgradeCost = 10; // this is how much it costs to get upgrade the amount that the delete button deletes
let autodeleteInterval = 1000; // this is how long the interval between autodeletes is
let isAutodeleteBought = false; // this tells the game whether or not the autodeleter has been bought

function updateCounter() {
  document.getElementById("counter").innerHTML = "you got " + emptiness + " empty";
  console.log("updated counter to " + emptiness + "!");
}

function updateDeleteCost() {
  document.getElementById("upgradeDeleteCount").innerHTML = "upgrade delete (cost: " + deleteUpgradeCost + " empty)";
}
function bruhThisThingEmpty() {
  emptiness += deleteCount;
  console.log("set emptiness to " + emptiness + "!");
  updateCounter();
}

function upgradeDeleteCount() {
  if(emptiness >= deleteUpgradeCost) {

    deleteCount = deleteCount*3;

    emptiness -= deleteUpgradeCost;
    emptiness = Math.round(emptiness);

    deleteUpgradeCost = deleteUpgradeCost*2.8;
    deleteUpgradeCost = Math.round(deleteUpgradeCost);

    updateCounter();
    updateDeleteCost();
    updateDeleteCount();
  }
}

function updateDeleteCount() {
  document.getElementById("deleteCount").innerHTML = "delete (" + deleteCount + ")";
  if(emptiness == Infinity) {
    document.getElementById("deleteCount").innerHTML = "you win!";
  }
}

// function autodelete() {
//   isAutodeleteBought = true;
//   while(isAutoDeleteBought = true) {
//
//   }
// }
