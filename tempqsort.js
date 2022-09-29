
let quick_sort_btn = document.getElementById('quick_sort_btn');
console.log(quick_sort_btn, 'Buttons!!')
let bars_container = document.querySelector('.bars_container');

let arr = [34, 5, 32, 44, 58, 20, 10, 49, 47, 35,27, 5, 37, 27, 46, 26, 40, 43, 12, 10 ];

// var bars; 27, 5, 37, 27, 46, 26, 40, 43, 12, 10
document.addEventListener("DOMContentLoaded", () => {
    console.log(arr, 'Array OG!!');
    drawBars(arr);
  } )

function drawBars(array){
  bars_container.innerHTML = "";
  for(i=0; i<array.length; i++){
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i]*10 + "px";
    bars_container.appendChild(bar);
  }
}

quick_sort_btn.addEventListener("click", async function(){
  console.log('Quick Sort clicked!!');
//   var bars = document.getElementsByClassName("bar");
//   console.log(bars, 'OG Bars!!');

  const arr_sorted= await quick(arr, 0, arr.length -1);
//   console.log(arr_sorted, 'Qsorted Array');

});

function delay(time){
    return new Promise((resolve) => setTimeout(resolve, time) );
}

async function quick(arr, left , right){
    var bars = document.getElementsByClassName("bar");
    // console.log(bars, 'Bars Mile!!');
  if(arr.length > 1){
  let  index = await partition(arr, left, right);
    
    console.log(index, 'partition index!!');
    if(left < index-1){
       quick(arr, left, index-1);
    }
    
    if(index < right){
       quick(arr, index+1, right);
    }
  }

  return arr; 
}

async function partition(arr, left, right){
  let bars = document.getElementsByClassName("bar");
  let pivot = arr[left];
  
  for(i=left; i<=right; i++){
      bars[i].style.backgroundColor = 'lightgreen';
  }
  bars[left].style.backgroundColor = 'red';
  console.log('Pivot colored red');

  await delay(1000);
  
  let a=left; 
  let b=right;
  console.log('\n');
  console.log(pivot,':Pivot');
//   console.log(arr[a], arr[b], 'Partition');

  while(a<b){
    while(arr[a] <= pivot){
      a++;
    }
    while(arr[b] > pivot){
      b--;
    }
    if(a<b){
        console.log(arr[a],arr[b], 'Swapping Index!!');
      [arr[a], arr[b]] = [arr[b], arr[a]];

      bars[a].style.height = arr[a] * 10 + "px";
      bars[b].style.height = arr[b] * 10 + "px";

      await delay(1000);
    }
  }
    console.log(arr[left], arr[b], 'Swapping Pivot');
    [arr[left], arr[b]] = [arr[b], arr[left]];

    bars[left].style.height = arr[left] * 10 + "px";
    bars[b].style.height = arr[b] * 10 + "px";

    for(i=left; i<=right; i++){
      bars[i].style.backgroundColor = 'white';
    }

      await delay(1000);

  return b;
}


// const arr = [64, 34, 25, 12, 22, 11, 90];

