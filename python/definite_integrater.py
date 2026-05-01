import sympy as sp
from sympy import sqrt, sin, cos, pi, E
sp.init_printing()

# Define the variables
x, y, z = sp.symbols('x y z')

# Define the function to integrate
f = 4

# Perform the double integral
integral = sp.integrate(f, (x, y, y + 8), (y, 0, 8))

# Print the integral in LaTeX
print(sp.latex(integral))