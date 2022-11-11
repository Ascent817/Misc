#include <SFML/Graphics.hpp>
#include <tgmath.h>

float polynomial(float x)
{
    return 4 * pow(x, 3) - 3 * pow(x, 2) + x + 1;
    // x^3 - 3x^2 + x + 1
}

class Polynomial
{
    public:
        std::vector<Term> terms;

        Polynomial(std::vector<Term> terms)
        {
            this->terms = terms;
        }
};

struct Term
{
    float coefficient;
    float exponent;
};

int main()
{
    // Create the array with points
    int points[1000];

    // Fill the array with points
    for (int i = 0; i < 1000; i++)
    {
        points[i] = polynomial(i / 100.0f);
    }

    // Create the main window
    sf::RenderWindow window(sf::VideoMode(), "Particle Life", sf::Style::Fullscreen);

    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
            {
                window.close();
            }
        }

        window.clear();

        for (int i = 0; i < 1000; i++)
        {
            // Plot point
            sf::CircleShape circle(1);
            circle.setPosition(i, points[i]);
            circle.setFillColor(sf::Color::White);
            window.draw(circle);

            // Plot x axis
            sf::Vertex line[] =
            {
                sf::Vertex(sf::Vector2f(0, 500)),
                sf::Vertex(sf::Vector2f(1000, 500))
            };
        }

        window.display();
    }

    return 0;
}