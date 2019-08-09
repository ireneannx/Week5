
function a(x){
    return function b(y){
        console.log(x+y)
    }
}


a(2)(3);

(function how(x){
    console.log(x);
})(3)
