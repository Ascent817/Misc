#include <SFML/Graphics.hpp>
#include <tgmath.h>
#include <iostream>
#include <random>

using namespace std;
using namespace sf;

int randomRange(int min, int max) // range : [min, max]
{
    static bool first = true;
    if (first)
    {
        srand(time(NULL));
        first = false;
    }
    return min + rand() % ((max + 1) - min);
}

Vector2f normalize(Vector2f v)
{
    float length = sqrt((v.x * v.x) + (v.y * v.y));
    if (length != 0)
    {
        return v / length;
    }
    else
    {
        return v;
    }
}

class Particle
{
public:
    int type;
    int radius;
    int bounds;

    int coefficients[8];

    Color color;
    CircleShape shape;

    Vector2f position;
    Vector2f velocity;
    Vector2f acceleration;

    Particle()
    {
        type = 0;
        position = Vector2f(randomRange(0, VideoMode::getDesktopMode().width), randomRange(0, VideoMode::getDesktopMode().height));
        velocity = Vector2f(0, 0);
        acceleration = Vector2f(0, 0);
        radius = 10;
        bounds = 100;
        color = Color::White;
        shape = CircleShape(10.f);
    }

    Particle(int type, Vector2f position, Vector2f velocity, Vector2f acceleration)
    {
        type = type;
        position = position;
        velocity = velocity;
        acceleration = acceleration;
    }

    void update(Particle particles[100])
    {
        acceleration = {0, 0};
        velocity = velocity * 0.98f;
        velocity += acceleration;
        velocity = normalize(velocity);
        position += velocity;
        updateShape();
    }

    void applyForce(Vector2f force)
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
    Particle particles[100];
    const int SIZE_OF_ELEMENT = sizeof(particles[0]);

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
        for (int i = 0; i < sizeof(particles) / SIZE_OF_ELEMENT; i++)
        {
            // particles[i].applyForce(Vector2f(0, rand() % 1) * 0.001f);
            particles[i].update(particles);
            window.draw(particles[i].shape);
        }
        window.display();
    }

    return 0;
}