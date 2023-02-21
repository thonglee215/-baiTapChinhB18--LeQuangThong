var numArr = [];
function addNum() {
    var num = Number(document.querySelector("#txtNum").value);
    numArr.push(num);
    document.querySelector("#numArray").innerHTML = numArr;
    console.log(numArr);
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
    for (var i = 0; i < numArr.length; i++) {
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
            var n=i;
            break;
        } 
    }
    for (var i = n; i < numArr.length; i++) {
        if (min > numArr[i + 1] && numArr[i + 1] > 0) {
            min = numArr[i + 1];
        }
    }
    document.getElementById("result4").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
}
document.querySelector("#calc4").onclick = minPositive;

// CÂU 5
function lastPositive() {
    var last = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0 && numArr[i] % 2 == 0  ) {
            last = numArr[i];
        }
    }
    document.getElementById("result5").innerHTML = "Số nhỏ nhất trong mảng là: " + last;
}
document.querySelector("#calc5").onclick = lastPositive;