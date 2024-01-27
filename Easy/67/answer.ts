/* 
 * 61ms Beats 63.45% of users with TypeScript
 * 52.52 MB Beats 5.14% of users with TypeScript
 */
function addBinary(a: string, b: string): string {
    if (a === "0") return b;
    if (b === "0") return a;
    
    const total = BigInt(a)+BigInt(b);
    const totalStr = total.toString()
    let answer = totalStr.split('');
    for (let i = totalStr.length-1; i >= 1; i--) {
        switch(answer[i]) {
            case "3":
                answer[i] = '1';
                answer[i-1] = (parseInt(answer[i-1]) + 1).toString();
                break;
            case "2":
                answer[i] = '0';
                answer[i-1] = (parseInt(answer[i-1]) + 1).toString();
                break;
            default:
                break;
        }
    }
    switch(answer[0]) {
        case "3":
            answer[0] = '1';
            answer.unshift('1')
            break;
        case "2":
            answer[0] = '0';
            answer.unshift('1')
            break;
        default:
            break;
    }
    return answer.join('');
};