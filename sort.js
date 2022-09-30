//All buttons imported
let shuffle_btn = document.getElementById('shuffle_btn');
let bubble_sort_btn = document.getElementById('bubble_sort_btn');
let quick_sort_btn = document.getElementById('quick_sort_btn');
let insert_sort_btn = document.getElementById('insert_sort_btn');
let select_sort_btn = document.getElementById('select_sort_btn');
// console.log(sort_btn, shuffle_btn, 'Buttons!!')
let bars_container = document.querySelector('.bars_container');
let buttons_all = document.querySelectorAll('button');
console.log(buttons_all);

let range_min = 10;
let range_max = 60;
let noOfElements = 20;
let delay_time = 100;
let arr = new Array(noOfElements);

//All Event listeners
document.addEventListener("DOMContentLoaded", () => {
    arr = createArray();
    console.log(arr, 'Array OG!!');
    drawBars(arr);
    console.log('Bars drawn!!');
} )


shuffle_btn.addEventListener("click", () => {
    arr = createArray();
    bars_container.innerHTML = "";
    drawBars(arr);
})

bubble_sort_btn.addEventListener("click", bubble);
quick_sort_btn.addEventListener("click", async function(){
    console.log('Quick Sort clicked!!');
    //   console.log(bars, 'OG Bars!!');
    disableButtons();
    const arr_sorted= await quick(arr, 0, arr.length -1);
    await delay(delay_time*40);
    enableButtons();
    //   console.log(arr_sorted, 'Qsorted Array');
    // var bars = document.getElementsByClassName("bar");
    // for(k=0; k<bars.length; k++){
    //     bars[k].style.backgroundColor = 'lightgreen';
    // }

});
insert_sort_btn.addEventListener("click", insert);
select_sort_btn.addEventListener("click", select);

//All functions
function createArray(){
    let temp_arr = new Array(noOfElements);
    for(i=0; i<noOfElements; i++){
        randomNumber = Math.random()*(range_max - range_min);
        temp_arr[i] = Math.floor(randomNumber + range_min);
    }
    return temp_arr;
}

function disableButtons(){
  console.log('Buttons Disabled!');
  for(i=0; i<buttons_all.length; i++){
    buttons_all[i].disabled = !buttons_all[i].disabled;
    buttons_all[i].style.backgroundColor = 'grey';
  }
}

function enableButtons(){
  console.log('Buttons Enabled!');
  for(i=0; i<buttons_all.length; i++){
    buttons_all[i].disabled = !buttons_all[i].disabled;
    buttons_all[i].style.backgroundColor = 'black';
  }
}

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

    disableButtons();

    for(i=0 ; i< length-1 ; i++){
        for(j=0; j< length-i-1; j++){
            bars[j].style.backgroundColor = 'lightgreen';
            bars[j+1].style.backgroundColor = 'lightgreen';
            await delay(delay_time/2);

            if(arr[j] > arr[j+1]){  
                swapped = true;
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];

                bars[j].style.height = arr[j]*10 +"px";
                bars[j+1].style.height = arr[j+1]*10 +"px";
                await delay(delay_time/2);
            }
            
        bars[j].style.backgroundColor = 'white';
        bars[j+1].style.backgroundColor = 'white';
        }
        bars[j].style.backgroundColor = 'lightgreen';

      }
      
      bars[0].style.backgroundColor = 'lightgreen';
      //   bars[1].style.backgroundColor = 'lightgreen';
  enableButtons();
  console.log(arr, 'Array Sorted');
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

  await delay(delay_time);
  await delay(delay_time);
  
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

      await delay(delay_time);
      await delay(delay_time);
    }
  }
    console.log(arr[left], arr[b], 'Swapping Pivot');
    [arr[left], arr[b]] = [arr[b], arr[left]];

    bars[left].style.height = arr[left] * 10 + "px";
    bars[b].style.height = arr[b] * 10 + "px";

    for(i=left; i<=right; i++){
      bars[i].style.backgroundColor = 'white';
    }

      await delay(delay_time);
      await delay(delay_time);

  return b;
}

async function insert(){
    let length = noOfElements;
    console.log(arr, 'Insertion Sort called!!');
    let bars = document.getElementsByClassName("bar");

    disableButtons();
    for(i=1; i<length; i++){
        let j=i-1; 
        let current = arr[i];
        
        for(k=0; k<=i; k++){
            bars[k].style.backgroundColor = 'lightgreen';
            // await delay(delay_time);
        } 
        for(; j>=0 && current < arr[j]; j--){
            arr[j+1] = arr[j]; 

            bars[j+1].style.height = arr[j]*10 + "px";

            bars[j+1].style.backgroundColor = 'red';
            await delay(delay_time);
            bars[j+1].style.backgroundColor = 'lightgreen';
            // console.log(arr);
        }
        arr[j+1] = current;
        bars[j+1].style.height = current*10 + "px";
        delay(delay_time);
    }
    enableButtons();
    console.log(arr, 'Array Sorted');
}

async function select(){
    let length = noOfElements;
    console.log(arr, 'Selection Sort called!!');
    let bars = document.getElementsByClassName("bar");
    disableButtons();
    for(i=0; i<length-1; i++){
        let min = arr[i];
        let min_index = i;

        bars[i].style.backgroundColor = 'red';

        for(k=i+1; k<length; k++){
            bars[k].style.backgroundColor = 'lightblue';
        }

        for(j=i+1; j< arr.length; j++){
            if(arr[j] < arr[i]){
            [arr[i], arr[j]] = [arr[j], arr[i]];

            bars[i].style.height = arr[i]*10 + "px";
            bars[j].style.height = arr[j]*10 + "px";
            await delay(delay_time);
            }
        }

        // // bars[min_index].style.height = arr[i]*10 + "px";
        // bars[i].style.height = min*10 + "px";
        bars[i].style.backgroundColor = 'lightgreen';
        await delay(delay_time);
    }
  bars[i].style.backgroundColor = 'lightgreen';
  enableButtons();
  console.log(arr, 'Array Sorted');
}

// const arr = [64, 34, 25, 12, 22, 11, 90];









