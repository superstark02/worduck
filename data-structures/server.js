function solution(s) {
    var a = [];
    var count0 = 0, count1 = 0;
    var cnt = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i]==="1"){
            count1++;
        }
        else if(s[i] === "0"){
            count0++;
        }
        if(count0 === count1){
            cnt++;
        }
    }
    console.log(cnt)
}

solution("0111100010");