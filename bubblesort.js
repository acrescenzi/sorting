function bubbleSort(array) { 
  for(let i = 0; i < array.length - 1; i++){
    let slice = [];
    if(i === array.length - 2){
       slice = array.slice(i);
    } else {
       slice = array.slice(i ,i + 2)
    }
  console.log(swap(slice));
  }
  
}


function swap(slice){
   return slice
}

bubbleSort([2,4,9,7])