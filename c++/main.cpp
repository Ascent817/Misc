#include <SFML/Graphics.hpp>
#include <tgmath.h>
#include <iostream>
using namespace std;
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
    int radius;
    int bounds;

    int coefficients[8];

    Color color;
    CircleShape shape;

    Vector2D position;
    Vector2D velocity;
    Vector2D acceleration;

    Particle()
    {
        type = 0;
        position = Vector2D(0, 0);
        velocity = Vector2D(0, 0);
        acceleration = Vector2D(0, 0);
        radius = 10;
        bounds = 100;
        color = Color::White;
        shape = CircleShape(10.f);
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
        acceleration = {0, 0};
        velocity += acceleration;
        position += velocity;
        updateShape();
    }

    void applyForce(Vector2D force)
    {
        acceleration = force;
        velocity += acceleration;
    }

    void updateShape()
    {
        shape.setPosition(position.x, position.y);
    }
};

int main()
{
    // Create the main window
    RenderWindow window(VideoMode(), "Particle Life", Style::Fullscreen);

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
        for (int i = 0; i < 1000; i++)
        {
            particles[i].update();
            particles[i].applyForce(Vector2D(0, rand() % 1) * 0.01f);
            window.draw(particles[i].shape);
        }
        window.display();
    }

    return 0;
}