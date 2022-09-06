#include <SFML/Graphics.hpp>
#include <tgmath.h>
using namespace sf;

class Vector2D
{
public:
    double x, y;

    Vector2D()
    {
        x = 0;
        y = 0;
    }

    Vector2D(double x, double y)
    {
        x = x;
        y = y;
    }

    double length() const
    {
        return sqrt(x * x + y * y);
    }

    Vector2D normalize() const
    {
        double len = length();
        return Vector2D(x / len, y / len);
    }

    bool operator==(const Vector2D &other) const
    {
        return x == other.x && y == other.y;
    }

    bool operator!=(const Vector2D &other) const
    {
        return !(*this == other);
    }

    Vector2D operator+(const Vector2D &other) const
    {
        return {x + other.x, y + other.y};
    }

    Vector2D operator-(const Vector2D &other) const
    {
        return {x - other.x, y - other.y};
    }

    Vector2D operator*(double scalar) const
    {
        return {x * scalar, y * scalar};
    }

    Vector2D operator/(double scalar) const
    {
        return {x / scalar, y / scalar};
    }

    Vector2D &operator+=(const Vector2D &other)
    {
        x += other.x;
        y += other.y;
        return *this;
    }

    Vector2D &operator-=(const Vector2D &other)
    {
        x -= other.x;
        y -= other.y;
        return *this;
    }

    Vector2D &operator*=(double scalar)
    {
        x *= scalar;
        y *= scalar;
        return *this;
    }

    Vector2D &operator/=(double scalar)
    {
        x /= scalar;
        y /= scalar;
        return *this;
    }
};
typedef Vector2D Vector2D;

class Particle
{
public:
    int type;

    Vector2D position;
    Vector2D velocity;
    Vector2D acceleration;

    Particle()
    {
        type = 0;
        position = Vector2D(0, 0);
        velocity = Vector2D(0, 0);
        acceleration = Vector2D(0, 0);
    }

    Particle(int type, Vector2D position, Vector2D velocity, Vector2D acceleration)
    {
        type = type;
        position = position;
        velocity = velocity;
        acceleration = acceleration;
    }

    void update()
    {
        velocity += acceleration;
        position += velocity;
        acceleration = {0, 0};
    }
};

int main()
{
    // Create the main window
    RenderWindow window(VideoMode(), "Particle Life", Style::Fullscreen);
    CircleShape shape(100.f);
    shape.setFillColor(Color::Green);
    shape.setPosition(100, 100);

    // Populate the particle array
    Particle particles[1000];

    while (window.isOpen())
    {
        Event event;
        while (window.pollEvent(event))
        {
            if (event.type == Event::Closed)
            {
                window.close();
            }
        }

        window.clear();
        window.draw(shape);
        window.display();
    }

    return 0;
}