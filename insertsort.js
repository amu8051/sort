let shuffle_btn = document.getElementById('shuffle_btn');
let insert_sort_btn = document.getElementById('insert_sort_btn');
// console.log(sort_btn, shuffle_btn, 'Buttons!!')
let bars_container = document.querySelector('.bars_container');
let delay_time = 100;

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

insert_sort_btn.addEventListener("click", insert);

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

async function insert(){
    let length = noOfElements;
    console.log(arr, 'Insertion Sort called!!');
    let bars = document.getElementsByClassName("bar");

    for(i=1; i<length; i++){
        let j=i-1; 
        let current = arr[i];
        
        for(k=0; k<=i; k++){
            bars[k].style.backgroundColor = 'lightgreen';
            await delay(delay_time);
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
  console.log(arr, 'Array Sorted');
}

// const arr = [64, 34, 25, 12, 22, 11, 90];

