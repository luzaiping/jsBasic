function foo() {
	function A(){
		this.x = 10
	}

	A.prototype.y = 20

	function B(){}
	B.prototype = new A()

	var b = new B()
	B.prototype.constructor = B

	console.log(b.x, b.y)

    console.log(Object.getPrototypeOf(B) === Function.prototype)
    console.log(Object.getPrototypeOf(A) === Function.prototype)
    console.log(Object.getPrototypeOf(Object) === Function.prototype)

    console.log(b instanceof B)
    console.log(b instanceof A)
    console.log(b instanceof Object)
}

foo()

/*function bar() {
	function A(){
		this.x = 10
	}

	A.prototype.y = 20

	// var a = new A();
	// console.log(a.x, a.y);

	function B() {
		B.supertype.constructor.apply(this, arguments)
	}

	function extend(parentType, childType) {
        var F = function() {}
        F.prototype = parentType.prototype
        childType.prototype = new F()
        childType.supertype = parentType.prototype
        childType.prototype.constructor = childType
    }
    extend(A, B)

	var b = new B()
	console.log(b.x, b.y)
}

bar()*/
