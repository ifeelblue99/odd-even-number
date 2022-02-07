let array = [1, 2 ,3 ,4 ,5 ,6 ]

function sum(arr){
    let odd = 0
    let even = 0
    let res = []
    array.forEach(el=>{
      if (el%2==0) {
        even += el
        res[0] = even
      }
      else{
        odd += el
        res[1] = odd
      }
    })
    
    return [even, odd]
}

// examples

console.log(sum(array))
