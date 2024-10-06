#include <iostream>
#include <cmath>

using namespace std;

double f(double x) {
    return x * x * x - 2 * x - 5;
}


// Bisection Method that takes in a function as a parameter
double bisectionMethod(double a, double b, double tolerance, int maxIterations) {
    if (f(a) * f(b) >= 0) {
        cout << "The function values at the endpoints must have opposite signs." << endl;
        return -1;
    }

    double c;
    
    for (int i = 0; i < maxIterations; i++) {
        c = (a + b) / 2;
        if (f(c) == 0 || (b - a) / 2 < tolerance) {
            return c;
        }
        if (f(a) * f(c) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return c;
}

int main() {
    double a = 2, b = 3, tolerance = 1e-6, maxIterations = 100;
    double root = bisectionMethod(a, b, tolerance, maxIterations);
    cout << "The root is: " << root << endl;
    return 0;
}
