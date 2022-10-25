#include <iostream>
#include <string>

using namespace std;

class Vector2D
{
public:
    int x;
    int y;

    Vector2D(float x, float y)
    {
        this->x = 0;
        this->y = 0;
    }

    Vector2D operator+(const Vector2D& v2) const
    {
        return Vector2D(x + v2.x, y + v2.y);
    }

    Vector2D operator-(const Vector2D& v2) const
    {
        return Vector2D(x - v2.x, y - v2.y);
    }
};

void log(string message)
{
    cout << message << endl;
}

int main()
{
    string a = "Help";
    int b = 2;
    int c = 3;

    cout << a << endl;

    return 0;

    Vector2D position(4.0f, 4.0f);
    Vector2D speed(0.5f, 1.5f);

    Vector2D result = position + speed;
}
