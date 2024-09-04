function plusMinus(arr){
    let positivo = 0;
    let negativo = 0;
    let zero = 0;
    let len = arr.length;
    arr.forEach ((item) => {
        if (item > 0) {
            positivo++;
        } 
        else if (item < 0) {
            negativo++;
        }
        else {
            zero ++;
        }
    })
console.log(plusMinus);
}

testArr = [1, -1, 3, -3, -4, 9, 12];
plusMinus(testArr);