  let fibonacci=()=>{
  	let num1=0;
	let num2=1;
	let temp=0;
	var sum=num1;
	while(num2<5000)
	{
		sum +=num2;
		temp=num1;
		num1=num2;
		num2=temp+num1;
	}
	console.log("Sum of fibonacci numbers =" + sum);
  }

