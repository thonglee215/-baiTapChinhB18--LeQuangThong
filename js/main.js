var numArr = [];
function addNum() {
    var num = Number(document.querySelector("#txtNum").value);
    numArr.push(num);
    document.querySelector("#numArray").innerHTML = numArr;
}
document.querySelector("#add").onclick = addNum;

//CÂU 1
function sumPositive() {
    var total = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            total += numArr[i];
        }
    }
    document.getElementById("result1").innerHTML = "Tổng số dương trong mảng là: " + total;
}
document.querySelector("#calc1").onclick = sumPositive;

// CÂU 2
function countPositive() {
    var count = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            count++;
        }
    }
    document.getElementById("result2").innerHTML = "Số số dương trong mảng là: " + count;
}
document.querySelector("#calc2").onclick = countPositive;

// CÂU 3
function min() {
    var min = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
        if (min > numArr[i + 1]) {
            min = numArr[i + 1];
        }
    }
    document.getElementById("result3").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
}
document.querySelector("#calc3").onclick = min;

// CÂU 4
function minPositive() {
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            min = numArr[i];
            var n = i;
            break;
        }
    }
    for (var i = n; i < numArr.length; i++) {
        if (min > numArr[i + 1] && numArr[i + 1] > 0) {
            min = numArr[i + 1];
        }
    }
    document.getElementById("result4").innerHTML = "Số dương nhỏ nhất trong mảng là: " + min;
}
document.querySelector("#calc4").onclick = minPositive;

// CÂU 5
function lastPositive() {
    var last = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            last = numArr[i];
        }
    }
    document.getElementById("result5").innerHTML = "Số chẵn cuối cùng trong mảng là: " + last;
}
document.querySelector("#calc5").onclick = lastPositive;

// CÂU 6
function swap(){
    var temp = 0;
    var first = Number(document.getElementById("txtNum1").value);
    var second = Number(document.getElementById("txtNum2").value);
        temp = numArr[first];
        numArr[first] = numArr[second];
        numArr[second] = temp; 
    document.getElementById("result6").innerHTML = "Mảng sau khi đổi: " + numArr;
}
document.querySelector("#calc6").onclick = swap;

// CÂU 7
function sortArr() {
    var numCopy = [];
    for (var i = 0; i < numArr.length; i++) {
        numCopy.push(numArr[i]);

        numCopy.sort(function (a, b) {
            return a - b;
        })
        document.getElementById("result7").innerHTML = numCopy;
    }
}
document.querySelector("#calc7").onclick = sortArr;

// CÂU 8
function primeCheck(n) {
    var check = 0;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            check = 1;
            break;
        }
        return check;
    }
}

function firstPrime() {
    var firstPrime = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (primeCheck(numArr[i]) == 0) {
            firstPrime = numArr[i];
            break;
        }
    }
    document.getElementById("result8").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + firstPrime;

}
document.querySelector("#calc8").onclick = firstPrime;

// CÂU 9
var realArr = [];
function addReal(){
    var real = Number(document.getElementById("txtReal").value)
    realArr.push(real);
    document.getElementById("realArray").innerHTML = "Mảng số thực: " + realArr; 
}
document.querySelector("#add1").onclick = addReal;

function countInteger(){
    var count = 0;
    for (var i = 0; i < realArr.length; i++) {
       if (Number.isInteger(realArr[i])){
        count ++;
       }
       else {
        document.getElementById("result9").innerHTML = " Mảng không có số nguyên";
       }
    }
    document.querySelector("#result9").innerHTML = "Số số nguyên có trong mảng trên: " + count;
}
document.querySelector("#calc9").onclick = countInteger;

// CÂU 10
function compare(a, b) {
    if (a > b) {
        document.getElementById("result10").innerHTML = " Số dương > số âm";
    }
    else if (a < b) {
        document.getElementById("result10").innerHTML = " Số dương < số âm";
    }
    else {
        document.getElementById("result10").innerHTML = " Số dương = số âm";
    }
};

function count() {
    var negative = 0;
    var positive = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            positive++;
        } else {
            negative++;
        }
        compare(positive, negative);
    }
}
document.querySelector("#calc10").onclick = count;