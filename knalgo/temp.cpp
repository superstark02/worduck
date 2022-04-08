#include<iostream>
using namespace std;

void q0( int, string);
void q1( int, string);
void q2( int, string);
void q3( int, string);

void q3(int i, string s){
    if(i==(int)s.length()){
        cout<<"No";
        return;
    }
    if(s[i]!='n'&&s[i]!='i'&&s[i]!='g'){
        q0(i+1,s);
    }
    else if(s[i]=='i'){
        q1(i+1,s);
    }
    else if(s[i]=='n'){
        q2(i+1,s);
    }
    else if(s[i]=='g'){
        cout<<"Yes";
        return;
    }
}

void q2(int i, string s){
    if(i==(int)s.length()){
        cout<<"No";
        return;
    }
    if(s[i]!='n'&&s[i]!='i'&&s[i]!='g'){
        q0(i+1,s);
    }
    else if(s[i]=='i'){
        q1(i+1,s);
    }
    else if(s[i]=='n'){
        q2(i+1,s);
    }
    else{
        q3(i+1,s);
    }
}

void q1(int i, string s){
    if(i==(int)s.length()){
        cout<<"No";
        return;
    }
    if(s[i]!='n'&&s[i]!='i'){
        q0(i+1,s);
    }
    else if(s[i]=='i'){
        q1(i+1,s);
    }
    else{
        q2(i+1,s);
    }
}

void q0(int i, string s){
    if(i==(int)s.length()){
        cout<<"No";
        return;
    }
    if(s[i]!='i'){
        q0(i+1,s);
    }
    else{
        q1(i+1,s);
    }
}


int main()
{
    string s = "heying";
    q0(0,s);
    return(0);
}