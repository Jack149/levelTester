x = 0
y = 0

radio.set_group(1)
radio.set_transmit_power(7)
TILT = 0
OLD_TILT = 0

def on_forever():
    global x, y, TILT
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if abs(x) > 64:
        basic.show_icon(IconNames.NO)
        radio.send_number(111)
        TILT += 1
    elif abs(y) > 64:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
        """)
        radio.send_number(111)
        TILT += 1
    else:
        basic.show_icon(IconNames.YES)
        radio.send_number(111)
        TILT += 1
basic.forever(on_forever)
