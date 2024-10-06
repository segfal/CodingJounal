# Bisection Method

The bisection method is a root-finding method that repeatedly bisects an interval and then selects a subinterval in which a root must lie for further processing. The method is applicable for any continuous function where one knows two values with opposite signs.

## Steps

1. Choose two initial points, a and b, such that f(a) and f(b) have opposite signs.

2. Calculate the midpoint, c, of the interval [a, b].

3. Determine the sign of f(c).
$$x^{3} - 2x - 5 = 0$$

$$f(2) = 2^{3} - 2(2) - 5 = 3$$

$$f(3) = 3^{3} - 2(3) - 5 = 16$$

$$f(2) * f(3) < 0$$

$$c = (2 + 3) / 2 = 2.5$$

$$f(2.5) = 2.5^{3} - 2(2.5) - 5 = 11.875$$
