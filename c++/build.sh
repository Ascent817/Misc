g++ -c *.cpp
g++ *.o -o main -lsfml-graphics -lsfml-window -lsfml-system
rm *.o
main.exe