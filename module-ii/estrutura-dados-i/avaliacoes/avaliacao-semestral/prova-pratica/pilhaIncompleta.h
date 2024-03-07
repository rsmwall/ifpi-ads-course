#include <stdio.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

typedef char Itemp; //q1, q6
//typedef float Itemp; //q5
typedef struct pilha{
	int max;
	int topo;
	Itemp *item;
}*Pilha; 

Pilha pilha(int m) {
	Pilha P = (Pilha)malloc(sizeof(struct pilha));
	P->max = m;
	P->topo = -1;
	P->item = (char*)malloc(m*sizeof(Itemp)); //q1, q6
	//P->item = (float*)malloc(m*sizeof(Itemp)); //q5
	return P;
}


Itemp topo(Pilha P) {
    return P->item[P->topo];
}


int vaziap(Pilha P){
	if (P->topo==-1) return 1;
	else return 0;
}

int cheiap(Pilha P){
	if (P->topo == P->max-1) return 1;
	else return 0;
}

void empilha (Itemp x, Pilha P) { 
    if (cheiap (P)) { 
        puts ("pilha cheia!"); abort (); 
    } 
    P->topo++; 
    P->item[P->topo] = x; 
} 


Itemp desempilha (Pilha P) { 
    if (vaziap (P)) {
      //  puts ("pilha vazia!"); 
        abort(); 
    } 
    Itemp x = P->item [P->topo]; 
    P->topo--; 
    return x; 
} 
