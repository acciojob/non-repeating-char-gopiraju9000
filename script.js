function firstNonRepeatedChar(str) {

	let ar = [];

	for (let index = 0; index < 26; index++) {
		ar[i] = 0;
	}

	for (let index = 0; index < str.length; index++) {

		let val = str[i].charCodeAt(0);

		ar[val-97]++;
	}

	for (let index = 0; index < bound; index++) {

		let val = str[i].charCodeAt(0);

		if(ar[val] == 1) console.log(str[i])
	}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
