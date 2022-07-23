//filter, indexOf 사용

function solution(s) {
  
    let answer;
    answer=s.filter((v,i)=>{
        if(i===s.indexOf(v)) return v;
    });
    return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));