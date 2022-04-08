#include <iostream>

using namespace std;

class Node
{
public:
    int data;
    Node *next;
};

void insert(int new_data, Node** head_ref){
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = NULL;

    if(*head_ref == NULL){
        *head_ref = new_node;
        return;
    }

    Node* last = *head_ref;
    while(last->next!=NULL){
        last = last->next;
    }

    last->next = new_node;
    return;
}

void append(int data, Node** head_ref){
    Node* new_node = new Node();
    new_node->data = data;
    new_node->next = NULL;

    if(*head_ref == NULL){
        *head_ref = new_node;
        return;
    }

    new_node->next = *head_ref;
    *head_ref = new_node;
}

void printList(Node* head){
    while(head != NULL){
        cout<<head->data<<" ";
        head = head->next;
    }
}

int main()
{
    Node *head = NULL;
    insert(2,&head);
    insert(3,&head);
    insert(4,&head);
    insert(5,&head);
    append(1,&head);
    printList(head);
    return 0;
}