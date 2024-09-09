document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementsByTagName("span");
  const btn_start = document.getElementById("start");
  const btn_stop = document.getElementById("stop");
  const btn_reset = document.getElementById("reset");
  let timer;
  let h = 0;
  let min = 0;
  let sec = 0;
  let ms = 0;

  function updateDisplay() {
    span[0].textContent = `${h} h`;
    span[1].textContent = `${min} min`;
    span[2].textContent = `${sec} sec`;
    span[3].textContent = `${ms} ms`;
  }

  function updateChrono() {
    ms += 1;

    if (ms == 10) {
      ms = 0;
      sec += 1;
    }

    if (sec == 60) {
      sec = 0;
      min += 1;
    }

    if (min == 60) {
      min = 0;
      h += 1;
    }

    updateDisplay();
  }

  function start() {
    timer = setInterval(updateChrono, 100);
    btn_start.disabled = true;
  }

  function stop() {
    clearInterval(timer);
    btn_start.disabled = false;
  }

  function reset() {
    clearInterval(timer);
    btn_start.disabled = false;
    ms = sec = min = h = 0;
    updateDisplay();
  }

  btn_start.addEventListener("click", start);
  btn_stop.addEventListener("click", stop);
  btn_reset.addEventListener("click", reset);
});
