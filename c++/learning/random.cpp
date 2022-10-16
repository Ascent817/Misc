#include <random>
#include <ctime>

int randomRange(int min, int max) // range : (min, max]
{
    int range = max - min;
    srand((unsigned) time(0));
    return rand();
}