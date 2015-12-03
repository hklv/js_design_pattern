/**
 * @author <a href="mailto:lvhuikang@gmail.com">lvhuikang</a>
 * 2015/12/3
 */
function testArrayFilter() {
    function CheckIfPrime(value) {
        if (value % 2 != 0) {
            return false;
        }
        return true;
    };
    var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 51];

    var primes = numbers.some(CheckIfPrime);
    alert(primes);
}