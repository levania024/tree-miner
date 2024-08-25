console.log('tree miner')

let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 0,
        bonus: 1
    }
];

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        bonus: 20
    }
];


let apple = 0;




function mineTree() {
    apple += 1
    console.log('mine', apple)

    update()
    return apple

}

function update() {

    let appleElm = document.getElementById('amount of apples')
    appleElm.innerText = apple

}


function buyPickaxe() {

    let overMath = mineTree()
    let resource = overMath.length

    if (resource >= '100') {
        resource
    }


    // let clicksElm = document.getElementById('pickaxe')
    clicksElm.innerText = overMath



}




// NOTE drawing data from the clicksupgrades array to add bonus to the page first card
// function click() {

//     let pickaxeOne = ''

//     let upgradesClicks = clickUpgrades.filter((clicks) => clicks.price >= '100')
//     console.log('total', upgradesClicks);

// upgradesClicks.forEach((addClicks) => pickaxeOne += addClicks.bonus)
// console.log('add', pickaxeOne);

//     let clicksElm = document.getElementById('pickaxe')
//     clicksElm.innerText = pickaxeOne

// }


// NOTE drawing data from the automatic array to add bonus to the page third card 
function automatic() {
    let roverOne = ''

    let autoClicks = automaticUpgrades.filter((clicks) => clicks.price >= '600')
    console.log('add', autoClicks);

    autoClicks.forEach((addClicks) => roverOne += addClicks.bonus)
    console.log('add', roverOne);

    let autoElm = document.getElementById('rover')
    autoElm.innerText = roverOne
}








// setInterval(collectAutoUpgrades, 3000);







