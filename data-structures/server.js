var generateParenthesis = function(n) {
    var ans = "";
    var temp_string = "";
    
    for(let i = 0; i < n; i++){
        temp_string = "";
        
        for(let j = 0; j < n-i; j++){
            temp_string = temp_string + '(';
        }
        for(let j = 0; j < temp_string.length; j++){
            temp_string = temp_string + ')';
        }
        for(let j = 0; j < (n-temp_string.length)/2; j++){
            temp_string = temp_string + "()";
        }
        
        ans.push(temp_string);
        if(temp_string !== temp_string.reverse()){
            ans.push(temp_string.reverse());
        }
    }
    
    return ans;
    
};

console.log(generateParenthesis(3));