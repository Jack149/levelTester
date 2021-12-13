x = 0
y = 0

def on_forever():
    global x, y
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if abs(x) > 32:
        basic.show_icon(IconNames.SAD)
    elif abs(y) > 32:
        basic.show_icon(IconNames.ANGRY)
    else:
        basic.show_icon(IconNames.HAPPY)
basic.forever(on_forever)
