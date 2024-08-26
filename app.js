console.log('tree miner')

//NOTE Define upgrades that increase apples per click
let clickUpgrades = [
    {
        name: "Basket",
        cost: 10,
        quantity: 0,
        power: 1
    }
];

//NOTE Define upgrades that increase apples per second
let autoUpgrades = [
    {
        name: "Tree",
        cost: 50,
        quantity: 0,
        power: 10
    }
];

//NOTE Initialize game variables
let apples = 0;                //NOTE Total number of apples
let applesPerClick = 1;        //NOTE Number of apples gained per click
let applesPerSecond = 0;       //NOTE Number of apples gained automatically per second

//NOTE Function to update the display with current game state
function updateDisplay() {
    document.getElementById('appleCount').innerText = Math.floor(apples);
    document.getElementById('applesPerSecond').innerText = applesPerSecond;
    document.getElementById('applesPerClick').innerText = applesPerClick;
    document.getElementById('totalApplesPerSecond').innerText = applesPerSecond;

    updateUpgradesDisplay('clickUpgrades');
    updateUpgradesDisplay('autoUpgrades');
}

//NOTE Function to update the display of available upgrades
function updateUpgradesDisplay(upgradeType) {
    let upgradesHTML = '';
    let upgrades = upgradeType == 'clickUpgrades' ? clickUpgrades : autoUpgrades;

    // Generate HTML for each upgrade
    for (let i = 0; i < upgrades.length; i++) {
        upgradesHTML += `
            <div class="upgrade">
                <button onclick="buyUpgrade('${upgradeType}', ${i})">
                    Buy ${upgrades[i].name}: ${upgrades[i].cost} apples
                </button>
                <p>${upgrades[i].name}s: ${upgrades[i].quantity}</p>
            </div>
        `;
    }

    //NOTE Update the DOM with the generated HTML
    document.getElementById(upgradeType).innerHTML = upgradesHTML;
}

//NOTE Function to handle clicking for apples
function appleClicks() {
    apples += applesPerClick;
    updateDisplay();
}

//NOTE Function to handle buying upgrades
function buyUpgrade(upgradeType, index) {
    let upgrades = upgradeType == 'clickUpgrades' ? clickUpgrades : autoUpgrades;
    let upgrade = upgrades[index];

    //NOTE Check if player can afford the upgrade
    if (apples >= upgrade.cost) {
        apples -= upgrade.cost;
        upgrade.quantity += 1;
        upgrade.cost = Math.ceil(upgrade.cost * 1.5);  //NOTE Increase cost for next purchase

        //NOTE Apply upgrade effect
        if (upgradeType == 'clickUpgrades') {
            applesPerClick += upgrade.power;
        } else {
            applesPerSecond += upgrade.power;
        }

        updateDisplay();
    }
}

//NOTE Set up interval to add apples automatically every second
setInterval(function () {
    apples += applesPerSecond;
    updateDisplay();
}, 1000);

//NOTE Initial display update
updateDisplay();