//[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)

function balikString(str){
    var output = ''
    for (var i = str.length-1;i >= 0; i--){
        output +=str[i]
    }
    return output
}

console.log(balikString('Hello world!'))
console.log (balikString('Danang Wahyudi'))
