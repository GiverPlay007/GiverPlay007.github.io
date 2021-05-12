const timer = document.getElementById("timer")
let time = 5;

const interval = setInterval(() => {
  --time;
  timer.text = time;

  if(time < 1) {
    window.location.href = "https://www.giverplay.me"
    clearInterval(interval)
  }
}, 1000)