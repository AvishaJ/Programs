let Count=(arr, arr_size)=>
{
	let even_count = 0;
	let odd_count = 0;
    let zero_count= 0;
	for (let i = 0; i < arr_size; i++) {
		
		if (arr[i] & 1 == 1)
        {
			odd_count++;
        }
        else if(arr[i] == 0 )
        {
              zero_count++;
        }
		else
        {
			even_count++;
        }
	}

	console.log("Even elements =  " + even_count + " Odd elements =  " + odd_count +" Zero elements = " + zero_count);
}


	let arr = [ 7, 5,0, 9, 5, 6, 0, 4 ];
	let n = arr.length;

	Count(arr, n);
