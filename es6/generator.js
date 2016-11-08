function render () {
    return "Hello world";
}

function * test(){
    var s = yield render();
    console.log(s);
}

const gen = test();
gen.next();
gen.next();