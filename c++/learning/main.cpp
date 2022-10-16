#include <iostream>
#include "random.h"

int main()
{
    int a;
    int b = 2;
    int c = 3;

    for (int i = 0; i < 100; i++)
    {
        std::cout << i << ":";
        std::cout << rand() % 6 << std::endl;
    }

    return 0;
}