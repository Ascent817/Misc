g++ -c *.cpp
g++ *.o -o main /SUBSYSTEM
rm *.o
echo "Build complete, running..."
main.exe