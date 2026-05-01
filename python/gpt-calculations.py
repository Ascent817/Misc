# Reinitializing code after reset
import math

# Given values
m1 = 5.98e24  # mass of the first body in kg
m2 = 3.8  # mass of the second body in kg
r = 4.47e14  # distance between the centers in meters
G = 6.674e-11  # gravitational constant in N·m²/kg²

# Calculate the gravitational force
F = (G * m1 * m2) / (r**2)
print(F)