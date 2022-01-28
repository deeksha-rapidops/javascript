let arr1 = '02544168';
let arr2 = arr1.split('')
let ans = '';

for (let i = 0; i < arr2.length; i++) {
    if ((arr2[i] % 2 === 0) && (arr2[i + 1] % 2 === 0)) {

        ans = ans + arr2[i] + '-';
    } else {

        ans = ans + arr2[i];
    }
}
console.log(ans);