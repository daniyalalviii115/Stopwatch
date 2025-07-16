


const result = document.getElementById("result");
const stopwatch = document.getElementById("stopwatch");
let totalsecond = 0;
let hour = "00", min = "00", sec = "00";
let intervalId = null;


function clearAll(){
          result.innerHTML = "";
}
function clearp(element) {
  element.parentElement.remove(); 
}
function save() {

    if (    stopwatch.textContent != `⏱ 00:00:00` ){
        const wrapper =document.createElement("div");
        wrapper.classList.add("wrapper")
        
        const p = document.createElement("p");
        p.classList.add("para")
        p.textContent = stopwatch.textContent;
        
        const button = document.createElement("button")
        button.classList.add("btn")
        button.textContent ="clear";

        button.onclick = ()=> clearp(button)
        
        wrapper.appendChild(p);
        wrapper.appendChild(button)
        result.appendChild(wrapper)

        clearInterval(intervalId)
        intervalId = null;
    }

}

function clearTimer() {
    totalsecond = 0;
    stopwatch.textContent = `⏱ 00:00:00`;
    //   result.innerHTML = "";
    clearInterval(intervalId);
    intervalId = null;



}

function start() {
    if (intervalId !== null) return;
    intervalId = setInterval(updateStopWatch, 100);

}

function updateStopWatch() {
    totalsecond++;
    let hour = String(Math.floor((totalsecond / 3600))).padStart(2, "0")
    let min = String(Math.floor((totalsecond % 3600) / 60)).padStart(2, "0")
    let sec = String((totalsecond % 60)).padStart(2, "0")

    stopwatch.textContent = `⏱ ${hour}:${min}:${sec}`



}



