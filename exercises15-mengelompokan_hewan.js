function groupAnimals(animals) {

    var arr = []
    var output = []
    var sorting = 'abcdefghijklmnopqrstuvwxyz'

    for(var i = 0 ; i < animals.length ; i++){
        for(var j = 0 ; j < sorting.length ; j++){
            if(animals[i][0] == sorting [j]){
                arr.push(j)
            }
        }
    }

    for(var k=0 ; k < sorting.length ; k++){
        var tampung = []
        for(var l=0 ; l < arr.length ; l++){
            if(k === arr[l]){
                tampung.push(animals[l])
            }
        }
        if (tampung.length !== 0){
            output.push(tampung)
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]