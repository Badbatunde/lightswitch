let bulb = document.getElementById('lightBulb')

// Function to switch the bulb.
function switchBulb() {
    console.log('bulb clicked')
    if (bulb.src.match('onbulb')) {
        bulb.src = 'images/offbulb.gif'
    } else {
        bulb.src = 'images/onbulb.gif'
    }
}

bulb.addEventListener('click', switchBulb)


