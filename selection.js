let shuffle_btn = document.getElementById('shuffle_btn');
let select_sort_btn = document.getElementById('select_sort_btn');
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

select_sort_btn.addEventListener("click", select);

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

async function select(){
    let length = noOfElements;
    console.log(arr, 'Selection Sort called!!');
    let bars = document.getElementsByClassName("bar");

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
  console.log(arr, 'Array Sorted');
}

// const arr = [64, 34, 25, 12, 22, 11, 90];

