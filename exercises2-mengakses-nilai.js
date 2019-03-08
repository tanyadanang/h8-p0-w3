function balikString(str){
    var tampung =''
    for( i=str.length-1;i>=0;i--){
        tampung+=str[i]
    }return tampung
}

console.log(balikString('Hello world!'))
console.log(balikString('Danang Wahyudi'))