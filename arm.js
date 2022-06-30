console.log ('Armstrong Numbers:');

for (let i = 0; i <= 10000; i++) {

    let numberOfDigits = i.toString().length;

    let armstrongNum = 0;
    
    let temp = i;
   
    while (temp > 0) {

        let remainder = temp % 10;
        armstrongNum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (armstrongNum == i) {
        console.log(i);
    }
}