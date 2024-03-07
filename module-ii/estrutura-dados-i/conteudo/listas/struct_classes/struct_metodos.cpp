#include <iostream>

struct Node2 {
    int id;

    Node2(){
        id = 0;
    }

    int setNode2(int i){
        id = i;
    }
    
    int getNode2(){
        return id;
    }
};

int main(void) {
    struct Node2 y1;
    struct Node2 y2;

    y1.setNode2(3);
    y2 = y1;
    y2.setNode2(4);

    std::cout << "(VALUE)y1.getNode2(): " << y1.getNode2() << std::endl;
    std::cout << "(VALUE)y2.getNode2(): " << y2.getNode2() << std::endl;

    std::cout << "--------------" << std::endl;

    struct Node2 *x=new Node2();
    struct Node2 *x2=new Node2();

    x2 = x;
    std::cout <<"x2->getNode2():"<<x2->getNode2()<<std::endl;

    x2->setNode2(4);

    std::cout << "x2->getNode2():" << x2->getNode2() << std::endl;
    std::cout << "x->getNode2():" << x->getNode2() << std::endl;
    
    std::cout << "---------------" << std::endl;

    return 0;
}