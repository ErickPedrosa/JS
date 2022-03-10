
function parímpar(n){
    if(n % 2 == 0){
        return 'Par';
    }else{
        return 'Ímpar';
    }
}

let res = parímpar(99);

console.log(res);