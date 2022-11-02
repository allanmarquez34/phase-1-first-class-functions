function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function(){return"yes"})
function returnsANamedFunction(){
    return function namedFucntion(){
        console.log('This is a named function');
    }
}
function returnsAnAnonymousFunction(){
    return () => console.log('this is an anonymous function');

}
