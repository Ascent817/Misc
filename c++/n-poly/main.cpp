#include <iostream>
#include <SFML/Graphics.hpp>
#include <tgmath.h>

struct Term
{
    float coefficient;
    float exponent;
};

class Polynomial
{
public:
    std::vector<Term> terms;

    Polynomial(std::vector<Term> terms)
    {
        this->terms = terms;
    }

    float evaluate(float x)
    {
        float result = 0;
        for (int i = 0; i < terms.size(); i++)
        {
            result += terms[i].coefficient * pow(x, terms[i].exponent);
        }
        return result;
    }
};

class Point
{
public:
    Point(float x, float y)
    {
        this->x = x;
        this->y = y;
    }

    float x;
    float y;
};

int main()
{

    const int size = 10000;
    const float start = -999;

    // Create the polynomial
    Polynomial polynomial = Polynomial({{1, 4}, {2, 3}, {-2, 2}, {-3, 1}, {1, 0}});

    // Create the array with points
    int points[size];

    // Fill the array with points
    for (int i = start; i < size + start; i++)
    {
        points[i] = polynomial.evaluate(i / 100.0f);
    }

    // Create the main window
    sf::RenderWindow window(sf::VideoMode(), "Particle Life", sf::Style::Fullscreen);

    // Create the main view
    Point offset = Point(0.0f, 0.0f);
    sf::View view = window.getDefaultView();
    view.setCenter(offset.x, offset.y);
    window.setView(view);

    while (window.isOpen())
    {

        // Process events
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left))
        {
            offset.x -= 10.0f;
        }

        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Right))
        {
            offset.x += 10.0f;
        }

        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Up))
        {
            offset.y -= 10.0f;
        }

        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Down))
        {
            offset.y += 10.0f;
        }

        view.setCenter(offset.x, offset.y);
        window.setView(view);

        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
            {
                window.close();
            }
        }

        window.clear();

        for (int i = 0; i < size + start; i++)
        {
            // Plot point
            sf::CircleShape circle(10);
            circle.setPosition(i + start, points[i]);
            circle.setFillColor(sf::Color::White);
            window.draw(circle);
        }

        window.display();
    }

    return 0;
}