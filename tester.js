function fatorial(num){
  for(let i = num; i >1; i--){
    num = num*(i-1)
  }return num
}


console.log(fatorial(5))