$1:: 
While GetKeyState("1", "P") {  ;while 1 is held
 Send 1 
 RandSleep(100,1000) ;sleep a random length of time
 }
return 

RandSleep(x,y) {
Random, rand, %x%, %y%
Sleep %rand%
}