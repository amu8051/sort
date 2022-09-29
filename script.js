let shuffle_btn = document.getElementById('shuffle_btn');
let sort_btn = document.getElementById('sort_btn');
// console.log(sort_btn, shuffle_btn, 'Buttons!!')
let bars_container = document.querySelector('.bars_container');

let range_min = 5;
let range_max = 60;
let noOfElements = 20;
let arr = new Array(noOfElements);

function createArray(){
    let temp_arr = new Array(noOfElements);
    for(i=0; i<noOfElements; i++){
        randomNumber = Math.random()*(range_max - range_min);
        temp_arr[i] = Math.floor(randomNumber + range_min);
    }
    return temp_arr;
}

document.addEventListener("DOMContentLoaded", () => {
    arr = createArray();
    console.log(arr, 'Array OG!!');
    drawBars(arr);
} )

sort_btn.addEventListener("click", bubble);

shuffle_btn.addEventListener("click", () => {
    arr = createArray();
    bars_container.innerHTML = "";
    drawBars(arr);
})

function drawBars(array){
    for(i=0; i<array.length; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i]*10 + "px";
        bars_container.appendChild(bar);
    }
}

function delay(time){
    return new Promise((resolve) => setTimeout(resolve, time) );
}

async function bubble(){
    let swapped; 
    let length = noOfElements;
    console.log(arr, 'Bubble Sort called!!');
    let bars = document.getElementsByClassName("bar");
  
  while(true){
    swapped = false; 
    for(i=0 ; i< length-1 ; i++){
        bars[i].style.backgroundColor = 'lightblue';
        bars[i+1].style.backgroundColor = 'lightblue';
        if(arr[i] > arr[i+1]){  
          
          swapped = true;
          [arr[i],arr[i+1]] = [arr[i+1], arr[i]];

          bars[i].style.height = arr[i]*10 +"px";
          bars[i+1].style.height = arr[i+1]*10 +"px";
          await delay(100);
        }
        bars[i].style.backgroundColor = 'white';
        bars[i+1].style.backgroundColor = 'white';

    }
    bars[length-1].style.backgroundColor = 'lightgreen';
    length--;
    if(!swapped){
      break;
    }
  }
  bars[0].style.backgroundColor = 'lightgreen';
  bars[1].style.backgroundColor = 'lightgreen';
  console.log(arr, 'Array Sorted');
}

// const arr = [64, 34, 25, 12, 22, 11, 90];

