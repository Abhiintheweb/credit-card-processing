
const convertNums = (num) =>{
    let val = 2 * num;
    if(val >= 10){
        val = val.toString().split('').map(n=>parseInt(n)).reduce((s, val)=>s+val);
    }
    return val;
}

const luhanCheck = (number) =>{
    const num = number.toString().split('').map(n=>parseInt(n)).reverse();
    
    const oddReverseNumbers  = num.filter((a,i) => i%2===0);
    const oddNumSum = oddReverseNumbers.reduce((s, val)=>s+val);

    const evenReverseNum  = num.filter((a,i) => i%2===1);
    const evenNumSum = evenReverseNum.map(i=>convertNums(i)).reduce((s, val)=>s+val);

    return (oddNumSum+evenNumSum) % 10 === 0;
}

module.exports = {luhanCheck}