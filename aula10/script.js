var y = 'Outer y'

class A{
	static field = 'Inner y';
	static{
		var y = this.field;
        console.log(y)
	}
}

console.log(y) 