#include <iostream>

using namespace std;

class Node3 {
    int id;

    public:
        Node3(){
            id = 2;
        }

        int setNode3(int i){
            id = i;
        }

        int getNode3(){
            return id;
        }
};

int main(){
    // Node3 a1;
    // a1.setNode3(4);
    // Node3 b1;
    // b1 = a1;
    // b1.setNode3(5);

    // cout << "b1.getNode3() :" << b1.getNode3() << endl;
    // cout << "a1.getNode3():" << a1.getNode3() << endl;

    Node3 *a = new Node3();
    Node3 *b = new Node3();
    b = a;
    a->setNode3(5);
    
    cout<<"b.getNode3():"<<b->getNode3()<<endl;
    cout<<"a.getNode3():"<<a->getNode3()<<endl;
}