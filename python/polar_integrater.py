import sympy as sp
from sympy import sin, cos, pi, sqrt

# Define the variables
r, z, theta = sp.symbols('r z theta');

# Define the function to integrate
f = 1

# Perform the double integral
integral = sp.integrate(r * f, (z, sin(r + 4), cos(r + 4)), (r, 4, 4.7854), (theta, 0, 2 * pi))

print(sp.simplify(integral))