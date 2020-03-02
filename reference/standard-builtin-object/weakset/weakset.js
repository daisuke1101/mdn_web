// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = null){
	if(!_refs)
		_refs = new WeakSet();
	
	// Avoid infinite recursion
	if(_refs.has(subject))
		return;

	fn(subject);
	if("object" === typeof subject){
		_refs.add(subject);
		for(let key in subject)
			execRecursively(fn, subject[key], _refs);
	}
}

const foo = {
	foo: "Foo",
	bar: {
		bar: "Bar"
	}
};

foo.bar.baz = foo; // Circular reference!
execRecursively(obj => console.log(obj), foo);