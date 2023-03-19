import mouse
from time import sleep
from random import randint
# mouse.move("500", "500")
# mouse.click() # default to left click
# mouse.right_click()
# mouse.double_click(button='left')
# mouse.double_click(button='right')
# mouse.press(button='left')
# mouse.release(button='left')

while (True):
    sleep(randint(1,2))
    mouse.move(randint(1,1000), randint(1,1000))
    mouse.click()
    