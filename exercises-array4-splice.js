var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    var input2 = input.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/06/1989', 'Pria', 'SMA Internasional Metro')
    function lineinput() {
        var output = []
        for(var i = 0; i < input.length; i++) {
            output += input[i] + ' '
        }
        return output
    }
   
    console.log(input)
    
    var splits1 = input[3].split('/')
    var splits2 = input[3].split('/')

    switch(splits1[1]) {
        case '01' :
            console.log('Januari')
            break
        case '02' :
            console.log('Februari')
            break
        case '03' :
            console.log('Maret')
            break
        case '04' :
            console.log('April')
            break
        case '05' :
            console.log('Mei')
            break
        case '06' :
            console.log('Juni')
            break
        case '07' :
            console.log('Juli')
            break
        case '08' :
            console.log('Agustus')
            break
        case '09' :
            console.log('September')
            break
        case '10' :
            console.log('Oktober')
            break
        case '11' :
            console.log('November')
            break
        case '12' :
            console.log('Desember')
            break
    }

    //sort
    splits1.sort(function(a, b){
        return b - a
    })
    console.log(splits1)

    //join
    var joins = splits2.join('-')
    console.log(joins)

    //slice
    var slice = input[1].slice(0, 14)
    console.log(slice)
}

dataHandling2(input)

