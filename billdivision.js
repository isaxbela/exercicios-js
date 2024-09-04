function billDivision(bill, k, b){
    const soma = bill.reduce((a, c) => a + c, 0);
    const result = (soma - bill[k])/2;

    if (b - result == 0) console.log("Bill Division");
    else console.log(b - result);
}