try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        console.error(e.name + ': ' + e.message);
    } else if(e instanceof RangeError) {
        console.error(e.name + ': ' + e.message);
    } else if(e instanceof ReferenceError) {
        console.error(e.name + ': ' + e.message);
    } else if(e instanceof SyntaxError) {
        console.error(e.name + ': ' + e.message);
    } else if(e instanceof TypeError) {
        console.error(e.name + ': ' + e.message);
    } else if(e instanceof URIError) {
        console.error(e.name + ': ' + e.message);
    }
}