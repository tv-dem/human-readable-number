module.exports = function toReadable (number){
    let arr = number.toString();
    let firstDischarge = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    secondDischarge = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
    if(number < 20) return firstDischarge[number];
    let rez = '';
    if(arr.length == 2){
        rez += secondDischarge[arr[0] - 1];
        rez += ' ';
        rez += arr[1] != 0 ? firstDischarge[arr[1]] : '';
    }
    if(arr.length == 3){
        rez += firstDischarge[arr[0]];
        rez += ' hundred';
        if(arr[1] != 0){
            rez += ' ';
            rez += arr[1] > 1 ? secondDischarge[arr[1] - 1] : firstDischarge[arr[1] + arr[2]];
        }
        if(arr[2] != 0){
            rez += ' ';
            rez += arr[1] > 1 || arr[1] == 0 ? firstDischarge[arr[2]] : '';
        }
    }
    return rez.trim();
  }