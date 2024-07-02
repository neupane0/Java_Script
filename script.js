document.addEventListener("DOMContentLoaded", () => {
    const redLight = document.querySelector(".red");
    const yellowLight = document.querySelector(".yellow");
    const greenLight = document.querySelector(".green");
  
    let currentLight = 0;
  
    function changeLight() {
      redLight.classList.remove("on");
      yellowLight.classList.remove("on");
      greenLight.classList.remove("on");
  
      if (currentLight === 0) {
        redLight.classList.add("on");
      } else if (currentLight === 1) {
        yellowLight.classList.add("on");
      } else {
        greenLight.classList.add("on");
      }
  
      currentLight = (currentLight + 1) % 3;
    }
  
    setInterval(changeLight, 1000);
  });
  