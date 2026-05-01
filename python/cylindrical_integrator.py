import sympy as sp
from sympy import sin, cos, pi, sqrt

# Define the variables
r, theta, z = sp.symbols('r theta z');

# Define the function to integrate
f = r

# Perform the double integral
integral = sp.integrate(r * f, (z, 0, 4-r**2), (r, 0, 2), (theta, 0, 2 * pi))

print(sp.latex(integral))