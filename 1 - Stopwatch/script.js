// const pause = document.getElementById("pause");
// const play = document.getElementById("play");
// const reset = document.getElementById("reset");
// const lap = document.getElementById("lap");
const stopwatch = document.getElementById("stopwatch");

let time = [0, 0, 0];

const play = setInterval(startTime, 1000);

function startTime() {
    time[2]++;
    if (time[2] == 60) {
        time[2] = 0;
        time[1]++;
        if (time[1] == 60) {
            time[1] = 0;
            time[0]++;
        }
    }
    let hours = time[0] < 10 ? "0" + time[0] : time[0];
    let minute = time[1] < 10 ? "0" + time[1] : time[1];
    let second = time[2] < 10 ? "0" + time[2] : time[2];4

    stopwatch.innerHTML = hours + ":" + minute + ":" + second;
}

document.getElementById("play").addEventListener("click", () => {
})