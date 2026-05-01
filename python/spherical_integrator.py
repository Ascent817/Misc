import sympy as sp
from sympy import sin, cos, sqrt, pi, E

rho, theta, phi = sp.symbols('rho theta phi')

f = rho * E**(-rho**2) * sin(phi)

spherical_jacobian = rho**2 * sin(phi)

integral = sp.integrate(f, (theta, 0, 2 * pi), (phi, 0, pi), (rho, 1, 3))

print(sp.latex(integral))