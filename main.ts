input.onButtonPressed(Button.A, function () {
    if (varmePrio < 10) {
        radio.sendString("" + (Prioriteret_liste[0]))
        varmePrio += 1
    } else if (varmePrio == 10) {
        radio.sendString("" + (Prioriteret_liste[1]))
        lysPrio += 1
    } else if (lysPrio == 10) {
        varmePrio = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == varme) {
        basic.showString("V")
    } else if (receivedString == lys) {
        basic.showString("L")
    }
})
let lysPrio = 0
let varmePrio = 0
let lys = ""
let varme = ""
let Prioriteret_liste: string[] = []
radio.setGroup(1)
Prioriteret_liste = [varme, lys]
varmePrio = 0
lysPrio = 0
