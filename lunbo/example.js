function name(){
	var liu = new person('liu');
	var li = new person('li');
	var wang = new person('wang');
	console.log(liu.toString());
	console.log(li.toString());
	console.log(wang.toString());
	var another = new person('hua');
	console.log(liu.count);
	console.log(li.count);
}