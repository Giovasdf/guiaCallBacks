function callback(name){
    console.log(name);
}
function getName(callback) {
    callback('John Doe');
}

getName(callback);