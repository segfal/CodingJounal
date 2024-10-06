#include <iostream>

struct Math{
    int square(int x);
    
};

int Math::square(int x){
    return x * x;
}


int _square(int x){
    return Math().square(x);
}

int main(){
    // Fix the lambda expression
    auto square = [](int x){
        return _square(x);
    };

    std::cout << square(10) << std::endl;  // Outputs: 100
    return 0;
}