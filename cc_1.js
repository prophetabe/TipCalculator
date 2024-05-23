bill=100;
result = bill >= 50 && bill <=300?0.2:0.15
console.log(bill,bill*result,bill+bill*result)
for (let i = 0; i < 10; i++) {
	console.log(i);
}
// commit 1 Initial logic for calculating tip using ternary operator.
bill=100;
tip = bill >= 50 && bill <=300?0.2:0.15
console.log(bill,bill*result,bill+bill*result)

// start of program
// commit 3 Create and test calcTip function.
const bills1 = [275, 40, 430]; // we know the bill
const bills2 = [125, 555, 44]; // ^
let tips = []; // empty because we don't know the tips yet.
let totals = []; // ^
// commit 2 Add output functionality to display bill, tip, and total.
function calcTip(bill) { 
    tip = bill >= 50 && bill <=300?0.2:0.15
    calc = tip * bill;
    return calc;    
}
    //              0     1   2
    // data_set1 = [275, 40, 430]

// commit 4 Implement and populate arrays for bills, tips, and totals.
var size = 3;
for ( let i = 0; i< 3; i++) {
    //console.log(i);                      // 0   1   2
    var tmp_tip = calcTip(bills1[i]); // 55, 6, 64.5
    tips.push(tmp_tip); // tips = [55, 6, 64.5]
    var tmp_total = tips[i] + bills1[i];
    totals.push(tmp_total);
}
// printing
for (let i=0; i<size; i++) {
    console.log(totals[i]);
}
