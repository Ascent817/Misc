g++ -c *.cpp
g++ *.o -o main
rm *.o
echo "Build complete, running..."
chmod +x main
main