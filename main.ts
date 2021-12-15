let x = 0
let y = 0
radio.setGroup(1)
radio.setTransmitPower(7)
let TILT = 0
let OLD_TILT = 0
basic.forever(function on_forever() {
    
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 64) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(111)
        TILT += 1
    } else if (Math.abs(y) > 64) {
        basic.showLeds(`
            . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
        `)
        radio.sendNumber(111)
        TILT += 1
    } else {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(111)
        TILT += 1
    }
    
})
