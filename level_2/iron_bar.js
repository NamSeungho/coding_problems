function solution (arrangement) {
    let depth = 0;
    let answer = 0;

    arrangement = arrangement.replace(/\(\)/gi, '*');

    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] === '(') {
            depth++;
        } else if (arrangement[i] === ')') {
            depth--;
            answer += 1;
        } else {
            answer += depth;
        }
    }

    return answer;
}

solution('()(((()())(())()))(())'); // answer: 17