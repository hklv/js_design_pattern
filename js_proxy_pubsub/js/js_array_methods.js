/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/3
 */

//indexOf
var arr = ['apple', 'orange', 'pear'];
var found = false;

for (var c in arr) {
    if (c === 'orange') {
        found = true;
    }
}
console.log("found : ", found);

console.log("user indexOf found: ", arr.indexOf('orange') != -1);

//forEach
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0, l = arr.length; i < l; i++) {
    console.log(arr[i]);
}
console.log("+++++++++++++++++++++++++++++++");

arr.forEach(function (item) {
    console.log(item);
});

//map
var oldArr = [{firstName: "John", lastName: "Tom"}, {firstName: 'Kobe', lastName: 'Jack'}];
function getNewArr() {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        var item = oldArr[i];
        item.full_name = [item.firstName, item.lastName].join(" ");
        newArr[i] = item;
    }
    return newArr;
}
console.log(getNewArr());

console.log("++++++++++++++++++++++++++++");

function getNewArrByMap() {
    return oldArr.map(function (item) {
        item.full_name = [item.firstName, item.lastName].join(" ");
        return item;
    });
}

console.log(getNewArrByMap());