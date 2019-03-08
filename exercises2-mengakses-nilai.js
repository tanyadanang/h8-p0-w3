//Exercises 2 

function balikString(str){
    var output =''
    for( i=str.length-1;i>=0;i--){
        output+=str[i]
    }return output
}

console.log(balikString('Hello world!'))
console.log(balikString('Danang Wahyudi'))
