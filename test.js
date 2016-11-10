function * names () {
    yield "foo";
    yield "bar";
    yield "zhang";
}

function * say () {
    yield * names();
    yield "that's all the names";
}

for(let name of say()){
    console.log(name);
}