from time import sleep
import keyboard

timeDelay = 0.01

ccKey = "e"
ccwKey = "w"

yy1Key = "1"
yy2Key = "2"

yy1Equipped = True
yy2Equipped = True

currentRotation = "none"


def toggleyy1():
    keyboard.send(yy1Key)
    yy1Equipped = not yy1Equipped
    sleep(timeDelay)


def toggleyy2():
    keyboard.send(yy2Key)
    yy2Equipped = not yy2Equipped
    sleep(timeDelay)


while keyboard.is_pressed("q") == False:
    desiredRotation = "none"
    if keyboard.is_pressed(ccwKey) == True:
        desiredRotation = "ccw"
    elif keyboard.is_pressed(ccKey) == True:
        desiredRotation = "cc"

    if currentRotation != desiredRotation:
        print("switching from " + currentRotation + " to " + desiredRotation)
        if desiredRotation == "ccw":  # counterclockwise logic, want yy1 to
            if not yy1Equipped:
                keyboard.send(yy1Key)
                yy1Equipped = not yy1Equipped
                sleep(timeDelay)
            if yy2Equipped:
                keyboard.send(yy2Key)
                yy2Equipped = not yy2Equipped
                sleep(timeDelay)
        elif desiredRotation == "cc":  # clockwise logic, want neither yy to be equipped
            if yy1Equipped:
                keyboard.send(yy1Key)
                yy1Equipped = not yy1Equipped
                sleep(timeDelay)
            if yy2Equipped:
                keyboard.send(yy2Key)
                yy2Equipped = not yy2Equipped
                sleep(timeDelay)
        else:  # no rotation logic, want both yys to be equipped
            if not yy1Equipped:
                keyboard.send(yy1Key)
                yy1Equipped = not yy1Equipped
                sleep(timeDelay)
            if not yy2Equipped:
                keyboard.send(yy2Key)
                yy2Equipped = not yy2Equipped
                sleep(timeDelay)

        currentRotation = desiredRotation
        # print(currentRotation)

    sleep(timeDelay)
