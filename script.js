const arr=[1,2,3];

Array.prototype.myMaReduce=function(calback,initialvalue){
      let sum=0
      let init=initialvalue
      this.forEach(el=>{
        sum+=el
      })
  return  calback(sum,init);
}

console.log(arr.myMaReduce(((a,b)=>a-b),12));




// Array.prototype.myMap=function(calback){

// let newArr=[]

//    for(let i=0;i<this.length;i++){
//     let val=calback(this[i])
//     newArr.push(val)
//    }


// return newArr

// }
// console.log(arr.myMap((i)=>i*4));




// Array.prototype.myFilter=function(calback){

//     // this this[i] i
//     let newArr=[]
//     for(let i=0;i<this.length;i++){
//         if(calback(this[i],i,this)){
//            newArr.push(this[i])
//         }
//     }

//     return newArr
// }

// console.log(arr.myFilter((deg)=>deg<30));


